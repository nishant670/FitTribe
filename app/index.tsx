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
                router.replace('/(tabs)/home');
            } else {
                router.replace('/auth/choice');
            }
        }, 2000); // 2 seconds splash

        return () => clearTimeout(timer);
    }, [isOnboarded]);

    return (
        <SafeAreaView className="flex-1 bg-primary items-center justify-center">
            <View className="items-center">
                {/* Placeholder for Logo */}
                <View className="w-24 h-24 bg-white rounded-2xl items-center justify-center mb-6">
                    <Text className="text-primary text-4xl font-bold">⚡</Text>
                </View>
                <Text className="text-white text-3xl font-bold tracking-wider">FitTribe</Text>
                <Text className="text-primary-light text-base mt-2 text-center px-8">
                    Daily-unlocked workouts.{'\n'}Real consistency.
                </Text>
            </View>

            <View className="absolute bottom-12">
                <ActivityIndicator size="large" color="white" />
            </View>
        </SafeAreaView>
    );
}

function ActivityIndicator({ size, color }: { size: 'small' | 'large', color: string }) {
    // Simple custom wrapper or just import from react-native
    const { ActivityIndicator: RNActivityIndicator } = require('react-native');
    return <RNActivityIndicator size={size} color={color} />;
}
