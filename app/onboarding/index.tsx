import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../components/Button';
import { useAuthStore } from '../../store/useAuthStore';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const FULL_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function OnboardingScreen() {
    const router = useRouter();
    const { completeOnboarding, loginAsGuest } = useAuthStore();

    const [duration, setDuration] = useState<number>(45);
    const [unlockTime, setUnlockTime] = useState<string>('07:00 AM');
    const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5]); // M-F default

    const handleFinish = () => {
        // Save preferences logic here
        loginAsGuest(); // For now assume guest flow completion
        completeOnboarding();
        router.replace('/(tabs)/home');
    };

    const toggleDay = (index: number) => {
        if (selectedDays.includes(index)) {
            setSelectedDays(selectedDays.filter(d => d !== index));
        } else {
            setSelectedDays([...selectedDays, index]);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row justify-between items-center px-6 py-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#1A202C" />
                </TouchableOpacity>

                {/* Step Indicator */}
                <View className="flex-row space-x-1">
                    <View className="w-2 h-2 rounded-full bg-primary" />
                    <View className="w-2 h-2 rounded-full bg-primary" />
                    <View className="w-2 h-2 rounded-full bg-primary" />
                    <View className="w-2 h-2 rounded-full bg-gray-200" />
                </View>

                <TouchableOpacity onPress={handleFinish}>
                    <Text className="text-gray-400 font-semibold">Skip</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1 px-6 pt-4">
                <Text className="text-2xl font-bold text-dark mb-2">Setup your plan</Text>
                <Text className="text-gray-500 mb-8">
                    Choose a duration and schedule that fits your life.
                </Text>

                {/* Duration */}
                <Text className="text-sm font-bold text-dark mb-3">Duration</Text>
                <View className="flex-row justify-between mb-8">
                    {[30, 45, 60].map((d) => (
                        <TouchableOpacity
                            key={d}
                            onPress={() => setDuration(d)}
                            className={twMerge(
                                "w-[30%] py-3 rounded-xl border items-center justify-center",
                                duration === d ? "border-primary bg-primary/5" : "border-gray-200 bg-white"
                            )}
                        >
                            <Text className={twMerge(
                                "font-bold",
                                duration === d ? "text-primary" : "text-gray-500"
                            )}>
                                {d} Days
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Unlock Time */}
                <Text className="text-sm font-bold text-dark mb-3">Daily Unlock Time</Text>
                <View className="flex-row items-center justify-between bg-gray-50 p-4 rounded-xl mb-8">
                    <View className="flex-row items-center">
                        <Ionicons name="time-outline" size={20} color="#0F9D88" className="mr-3" />
                        <Text className="text-dark font-bold text-lg ml-3">{unlockTime}</Text>
                    </View>
                    <Ionicons name="chevron-down" size={20} color="#CBD5E0" />
                </View>

                {/* Workout Days */}
                <Text className="text-sm font-bold text-dark mb-3">Workout Days</Text>
                <View className="flex-row justify-between mb-12">
                    {DAYS.map((day, index) => {
                        const isSelected = selectedDays.includes(index);
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => toggleDay(index)}
                                className={twMerge(
                                    "w-10 h-10 rounded-full items-center justify-center",
                                    isSelected ? "bg-primary" : "bg-gray-100"
                                )}
                            >
                                <Text className={twMerge(
                                    "font-bold text-sm",
                                    isSelected ? "text-white" : "text-gray-400"
                                )}>
                                    {day}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <Button title="Next Step" onPress={handleFinish} className="mb-8" />
            </ScrollView>
        </SafeAreaView>
    );
}
