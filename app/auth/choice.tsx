import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';

export default function AuthChoiceScreen() {
    const router = useRouter();

    const handleGuest = () => {
        router.push('/onboarding');
    };

    const handleSignIn = () => {
        router.push('/auth/login');
    };

    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-gray-900" style={{ paddingTop: insets.top }}>
            <StatusBar style="light" />
            {/* Background Image Placeholder - In real app use actual image */}
            <View className="flex-1 bg-gray-800 relative">
                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop' }}
                    className="flex-1 justify-end"
                    resizeMode="cover"
                >
                    <View className="absolute inset-0 bg-black/40" /> {/* Overlay */}

                    <View className="bg-white rounded-t-3xl p-8 pb-12 items-center">
                        <Text className="text-3xl font-bold text-dark text-center mb-3">
                            Build your streak.
                        </Text>
                        <Text className="text-gray-500 text-center mb-8 px-4 leading-6">
                            Join the community of consistent movers. Start small, finish strong.
                        </Text>

                        <Button
                            title="Continue as Guest"
                            onPress={handleGuest}
                            className="w-full mb-4"
                        />

                        <Button
                            title="Sign In"
                            onPress={handleSignIn}
                            variant="secondary"
                            className="w-full bg-gray-100"
                            textClassName="text-dark"
                        />

                        <Text className="text-xs text-gray-400 mt-6 text-center">
                            Create account later to sync progress
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}
