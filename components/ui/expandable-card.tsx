"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

interface ExpandableCardProps {
    items: {
        title: string;
        description: string;
        src: string;
        ctaText: string;
        ctaLink: string;
        content: React.ReactNode | (() => React.ReactNode);
    }[];
}

export const ExpandableCard = ({ items }: ExpandableCardProps) => {
    const [active, setActive] = useState<typeof items[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.05 },
                            }}
                            className="flex absolute top-4 right-4 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 shadow-xl"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    width={600}
                                    height={400}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-64 md:h-80 object-cover object-top"
                                />
                            </motion.div>

                            <div className="flex-grow overflow-y-auto">
                                <div className="flex justify-between items-start p-6">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-2xl text-neutral-800 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 mt-1"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-6 py-2 text-sm rounded-full font-bold bg-primary text-white hover:opacity-90 transition-opacity"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="px-6 pb-6">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col bg-surface/40 hover:bg-surface/60 border border-border/50 rounded-2xl cursor-pointer group transition-all duration-300"
                    >
                        <motion.div layoutId={`image-${card.title}-${id}`} className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                            <Image
                                fill
                                src={card.src}
                                alt={card.title}
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </motion.div>
                        <div className="flex justify-between items-center">
                            <div className="flex-grow">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-bold text-lg text-neutral-800 dark:text-neutral-200"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-1"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                            <motion.button
                                layoutId={`button-${card.title}-${id}`}
                                className="ml-4 px-4 py-2 text-xs rounded-full font-bold bg-gray-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-primary hover:text-white transition-colors"
                            >
                                {card.ctaText}
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.05 },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-neutral-500"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
