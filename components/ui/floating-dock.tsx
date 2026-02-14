"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
    placement = "bottom",
    orientation = "horizontal",
}: {
    items: { title: string; icon: React.ReactNode; href: string, onClick?: (e: React.MouseEvent) => void }[];
    desktopClassName?: string;
    mobileClassName?: string;
    placement?: "top" | "bottom" | "left" | "right";
    orientation?: "horizontal" | "vertical";
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} placement={placement} orientation={orientation} />
            <FloatingDockMobile items={items} className={mobileClassName} placement={placement} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
    placement = "bottom",
}: {
    items: { title: string; icon: React.ReactNode; href: string, onClick?: (e: React.MouseEvent) => void }[];
    className?: string;
    placement?: "top" | "bottom" | "left" | "right";
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className={cn(
                            "absolute inset-x-0 flex flex-col gap-2",
                            placement === "bottom" ? "bottom-full mb-2" : "top-full mt-2"
                        )}
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.onClick) {
                                            item.onClick(e);
                                        }
                                        setOpen(false);
                                    }}
                                    key={item.title}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800"
                                >
                                    <div className="h-4 w-4">{item.icon}</div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700"
            >
                <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
    placement = "bottom",
    orientation = "horizontal",
}: {
    items: { title: string; icon: React.ReactNode; href: string, onClick?: (e: React.MouseEvent) => void }[];
    className?: string;
    placement?: "top" | "bottom" | "left" | "right";
    orientation?: "horizontal" | "vertical";
}) => {
    let mousePosition = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mousePosition.set(orientation === "horizontal" ? e.clientX : e.clientY)}
            onMouseLeave={() => mousePosition.set(Infinity)}
            className={cn(
                "mx-auto hidden gap-6 rounded-3xl bg-surface/60 backdrop-blur-xl px-4 py-4 md:flex border border-border/50 shadow-2xl",
                orientation === "horizontal" ? "h-20 items-end" : "w-20 items-center flex-col",
                placement === "top" && orientation === "horizontal" ? "items-start" : "",
                className,
            )}
        >
            {items.map((item) => (
                <IconContainer mousePosition={mousePosition} key={item.title} placement={placement} orientation={orientation} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mousePosition,
    title,
    icon,
    href,
    onClick,
    placement = "bottom",
    orientation = "horizontal",
}: {
    mousePosition: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
    onClick?: (e: React.MouseEvent) => void;
    placement?: "top" | "bottom" | "left" | "right";
    orientation?: "horizontal" | "vertical";
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mousePosition, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };

        if (orientation === "horizontal") {
            return val - bounds.x - bounds.width / 2;
        } else {
            return val - bounds.y - bounds.height / 2;
        }
    });

    // Bigger sizes: 60px base, 110px peak
    let widthTransform = useTransform(distance, [-150, 0, 150], [60, 110, 60]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [60, 110, 60]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [30, 50, 30]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [30, 50, 30],
    );

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1, stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <a href={href} onClick={onClick}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 shadow-md border border-neutral-300 dark:border-neutral-700"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: orientation === "horizontal" ? (placement === "bottom" ? 10 : -10) : 0,
                                x: orientation === "vertical" ? -10 : "-50%",
                            }}
                            animate={{ opacity: 1, y: 0, x: orientation === "vertical" ? -20 : "-50%" }}
                            exit={{
                                opacity: 0,
                                y: orientation === "horizontal" ? (placement === "bottom" ? 2 : -2) : 0,
                                x: orientation === "vertical" ? -10 : "-50%",
                            }}
                            className={cn(
                                "absolute w-fit rounded-md border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-medium whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white shadow-xl z-50",
                                orientation === "horizontal"
                                    ? (placement === "bottom" ? "-top-10 left-1/2" : "-bottom-10 left-1/2")
                                    : "right-full top-1/2 -translate-y-1/2 mr-4"
                            )}
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </a>
    );
}
