import React from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ProgressBarProps {
    progress: number; // 0 to 1
    color?: string;
    className?: string;
}

export function ProgressBar({ progress, color = "bg-primary", className }: ProgressBarProps) {
    const percentage = Math.min(Math.max(progress, 0), 1) * 100;

    return (
        <View className={twMerge("h-2 w-full bg-gray-200 rounded-full overflow-hidden", className)}>
            <View
                className={twMerge("h-full rounded-full", color)}
                style={{ width: `${percentage}%` }}
            />
        </View>
    );
}
