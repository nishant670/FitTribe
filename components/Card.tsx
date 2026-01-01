import React from 'react';
import { View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface CardProps extends ViewProps {
    className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <View
            className={twMerge(
                "bg-white rounded-2xl p-4 shadow-sm border border-gray-100",
                className
            )}
            {...props}
        >
            {children}
        </View>
    );
}
