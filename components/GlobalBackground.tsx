'use client';

import React from 'react';
import NeuralBackground from './ui/flow-field-background';
import { useClientTheme } from '../hooks/useClientTheme';

const GlobalBackground = () => {
    const { resolvedTheme, mounted } = useClientTheme();
    const isDarkMode = mounted && resolvedTheme === 'dark';

    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <NeuralBackground
                color={isDarkMode ? "#6366f1" : "#4f46e5"}
                backgroundColor="#000000"
                particleCount={1200}
                trailOpacity={0.05}
                speed={0.4}
                className="opacity-90"
            />
        </div>
    );
};

export default GlobalBackground;
