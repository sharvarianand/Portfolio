'use client';

import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";
import { useClientTheme } from "../hooks/useClientTheme";

export default function NeuralHeroDemo() {
    const { resolvedTheme, mounted } = useClientTheme();

    if (!mounted) return <div className="w-full h-[300px] bg-slate-900 rounded-2xl" />;

    const isDarkMode = resolvedTheme === 'dark';
    const bgColor = isDarkMode ? "#0f172a" : "#ffffff";
    const particleColor = isDarkMode ? "#818cf8" : "#4f46e5";

    return (
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl my-8">
            <NeuralBackground
                color={particleColor}
                backgroundColor={bgColor}
                trailOpacity={0.1}
                speed={0.8}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold font-heading drop-shadow-sm">Flow Field Effect</h2>
            </div>
        </div>
    );
}
