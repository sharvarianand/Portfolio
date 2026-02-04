'use client';
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { skills } from '../data/skills';
import { ContainerScroll } from './ui/container-scroll-animation';
import { GlowingEffect } from './ui/glowing-effect';

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    // Motion values for 3D tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring animations for smooth movement
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Transform values for rotation
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isMobile) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                willChange: "transform, opacity"
            }}
            className="relative group cursor-pointer"
        >
            {/* Main Card */}
            <div className="relative bg-black/80 backdrop-blur-xl p-6 rounded-2xl border-2 border-white/20 shadow-lg h-full flex flex-col">
                {/* GlowingEffect - same as education cards */}
                <GlowingEffect
                    spread={35}
                    glow={true}
                    disabled={false}
                    proximity={56}
                    inactiveZone={0.01}
                    borderWidth={1.5}
                />

                {/* Icon */}
                <div className="relative z-10 mb-4 flex justify-center" style={{ transform: 'translateZ(50px)' }}>
                    <skill.icon
                        size={56}
                        className="text-white drop-shadow-lg transition-colors duration-300"
                    />
                </div>

                {/* Skill Name */}
                <h3
                    className="relative z-10 text-xl font-heading font-bold text-white text-center mb-2"
                    style={{ transform: 'translateZ(50px)' }}
                >
                    {skill.name}
                </h3>

                {/* Category Badge */}
                <div className="relative z-10 flex justify-center mb-3" style={{ transform: 'translateZ(50px)' }}>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/30">
                        {skill.category}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const SkillsSection = () => {
    return (
        <section id="skills" className="relative py-20">
            <ContainerScroll
                titleComponent={
                    <div className="flex flex-col gap-2 mb-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-heading font-bold gradient-text"
                        >
                            Technical Skills
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto"
                        >
                            The tools and technologies I use to bring digital ideas to life.
                        </motion.p>
                    </div>
                }
            >
                <div className="p-4 md:p-8">
                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            </ContainerScroll>
        </section>
    );
};

export default SkillsSection;
