import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../store/useAuthStore';

export default function SplashScreen() {
    const router = useRouter();
    const { isOnboarded } = useAuthStore();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isOnboarded) {
                router.replace('/(tabs)/community');
            } else {
                router.replace('/auth/choice');
            }
        }, 3000); // 3 seconds splash to show off the design

        return () => clearTimeout(timer);
    }, [isOnboarded]);

    return (
        <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center relative">

            {/* Logo Section */}
            <View className="items-center mb-12">
                <View className="w-28 h-28 bg-[#0B3D35] rounded-3xl items-center justify-center mb-6 shadow-xl shadow-green-900/20">
                    {/* Stylized F using text or icon combo */}
                    <Text className="text-white text-6xl font-black italic">F</Text>
                    <View className="absolute top-6 right-6 w-2 h-2 bg-green-400 rounded-full" />
                </View>

                <Text className="text-dark text-4xl font-bold tracking-tight mb-2">FitTribe</Text>
                <Text className="text-green-700 text-base font-medium text-center leading-6">
                    Daily-unlocked workouts.{'\n'}Real consistency.
                </Text>
            </View>

            {/* Bottom Loading Bar */}
            <View className="absolute bottom-16 w-full items-center px-12">
                <View className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <View className="w-1/2 h-full bg-green-500 rounded-full" />
                </View>
                <Text className="text-gray-400 text-xs mt-4 font-medium tracking-widest">V1.0.0</Text>
            </View>
        </SafeAreaView>
    );
}
