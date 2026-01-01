import React from 'react';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface StatusChipProps {
    status: 'unlocked' | 'completed' | 'locked' | 'missed' | 'pending';
    text?: string;
    className?: string;
}

export function StatusChip({ status, text, className }: StatusChipProps) {
    const styles = {
        unlocked: { bg: 'bg-primary-light', text: 'text-primary-dark', label: 'UNLOCKED' },
        completed: { bg: 'bg-green-100', text: 'text-green-700', label: 'DONE' },
        locked: { bg: 'bg-gray-100', text: 'text-gray-500', label: 'LOCKED' },
        missed: { bg: 'bg-red-100', text: 'text-red-600', label: 'MISSED' },
        pending: { bg: 'bg-blue-100', text: 'text-blue-600', label: 'PENDING' },
    };

    const config = styles[status];

    return (
        <View className={twMerge("px-2 py-1 rounded-md self-start", config.bg, className)}>
            <Text className={twMerge("text-xs font-bold uppercase", config.text)}>
                {text || config.label}
            </Text>
        </View>
    );
}
