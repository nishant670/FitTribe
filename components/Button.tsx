import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
    textClassName?: string;
}

export function Button({
    title,
    onPress,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    className,
    textClassName,
}: ButtonProps) {
    const baseStyles = "items-center justify-center rounded-xl flex-row opacity-100";
    const disabledStyles = "opacity-50";

    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        outline: "border-2 border-primary bg-transparent",
        ghost: "bg-transparent",
    };

    const sizes = {
        sm: "px-3 py-2",
        md: "px-4 py-3",
        lg: "px-6 py-4",
    };

    const textVariants = {
        primary: "text-white font-semibold",
        secondary: "text-white font-semibold",
        outline: "text-primary font-semibold",
        ghost: "text-primary font-semibold",
    };

    const textSizes = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            activeOpacity={0.7}
            className={twMerge(
                baseStyles,
                variants[variant],
                sizes[size],
                (disabled || isLoading) && disabledStyles,
                className
            )}
        >
            {isLoading ? (
                <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? '#0F9D88' : 'white'} />
            ) : (
                <Text className={twMerge(textVariants[variant], textSizes[size], textClassName)}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}
