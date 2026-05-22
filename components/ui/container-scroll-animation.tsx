"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({
    titleComponent,
    children,
    expandToFitContent = false,
}: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
    expandToFitContent?: boolean;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // On mobile: skip the scroll-driven 3D effects entirely and render inline.
    // The fixed-height scroll container on small screens wastes viewport space
    // and makes content effectively invisible above the fold.
    if (isMobile) {
        return (
            <div className="flex flex-col items-center px-4 py-8" ref={containerRef}>
                <div className="w-full max-w-5xl mx-auto text-center mb-6">
                    {titleComponent}
                </div>
                <div className="w-full max-w-5xl mx-auto rounded-2xl bg-black/50 dark:bg-zinc-900 border border-[#6C6C6C] p-3">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "flex justify-center relative p-2 md:px-12",
                expandToFitContent
                    ? "h-auto items-start md:pt-6 md:pb-10"
                    : "h-[65rem] items-center md:py-12",
            )}
            ref={containerRef}
            style={{ willChange: "transform" }}
        >
            <div
                className={cn(
                    "w-full relative",
                    expandToFitContent ? "py-10" : "py-28",
                )}
                style={{
                    perspective: "1000px",
                }}
            >
                <Header translate={translate} titleComponent={titleComponent} />
                <Card
                    rotate={rotate}
                    translate={translate}
                    scale={scale}
                    isMobile={isMobile}
                    expandToFitContent={expandToFitContent}
                >
                    {children}
                </Card>
            </div>
        </div>
    );
};

export const Header = ({ translate, titleComponent }: any) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center will-change-transform"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({
    rotate,
    scale,
    children,
    isMobile,
    expandToFitContent = false,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
    isMobile: boolean;
    expandToFitContent?: boolean;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow: isMobile
                    ? "0 10px 30px -10px rgba(0,0,0,0.5)"
                    : "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className={cn(
                "max-w-5xl -mt-12 mx-auto w-full border-2 md:border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#111111] rounded-[30px] shadow-2xl overflow-hidden will-change-transform",
                expandToFitContent ? "h-auto" : "h-[40rem] md:h-[50rem]",
            )}
        >
            <div
                className={cn(
                    "w-full rounded-2xl bg-black/50 dark:bg-zinc-900 md:rounded-2xl md:p-4",
                    expandToFitContent ? "h-auto" : "h-full overflow-y-auto custom-scrollbar",
                )}
            >
                {children}
            </div>
        </motion.div>
    );
};
