import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthChoiceScreen() {
    const router = useRouter();
    const { height } = Dimensions.get('window');
    const isSmallScreen = height < 700;

    const handleFindTribe = () => {
        router.push('/onboarding');
    };

    const handleSignIn = () => {
        router.push('/auth/login');
    };

    const handleGuest = () => {
        router.push('/onboarding');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />

            <View className="flex-1 px-6 items-center pt-2 pb-2 justify-between">
                {/* Top Section */}
                <View className="w-full h-full flex-1 mb-4">
                    {/* Logo Header */}
                    <View className="flex-row items-center justify-center mb-6 mt-2">
                        <Ionicons name="people" size={24} color="#10B981" />
                        <Text className="text-xl font-bold text-dark ml-2 tracking-tight">FitTribe</Text>
                    </View>

                    {/* Hero Image */}
                    <View className="w-full flex-1 rounded-[32px] overflow-hidden relative mb-6 bg-gray-100">
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000' }}
                            className="w-full h-full"
                            resizeMode="cover"
                        />

                        {/* Floating Badge */}
                        <View className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl flex-row items-center shadow-lg">
                            <View className="flex-row items-center mr-3 pl-1">
                                {[1, 2, 3].map((_, i) => (
                                    <View key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-2 first:ml-0 overflow-hidden">
                                        <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 10}` }} className="w-full h-full" />
                                    </View>
                                ))}
                            </View>
                            <View>
                                <Text className="text-dark font-bold text-xs">12k+ Active Tribes</Text>
                                <Text className="text-gray-500 text-[10px]">Join a community today</Text>
                            </View>
                        </View>
                    </View>

                    {/* Text Content */}
                    <View className="items-center mb-2">
                        <Text className="text-3xl font-bold text-dark text-center mb-2 leading-tight">
                            Fitness is easier when you're not alone.
                        </Text>
                        <Text className="text-gray-500 text-center text-sm px-4 leading-5">
                            Join people with similar interests. Show up together. Stay consistent.
                        </Text>
                    </View>
                </View>

                {/* Bottom Actions */}
                <View className="w-full gap-3 mb-2">
                    <TouchableOpacity
                        onPress={handleFindTribe}
                        className="w-full bg-green-500 py-3.5 rounded-full flex-row items-center justify-center shadow-lg shadow-green-200"
                    >
                        <Text className="text-white font-bold text-lg mr-2">Find My Tribe</Text>
                        <Ionicons name="arrow-forward" size={20} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleSignIn}
                        className="w-full bg-white py-3.5 rounded-full flex-row items-center justify-center border border-gray-200"
                    >
                        <Text className="text-dark font-bold text-lg">Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleGuest} className="py-2 mb-2">
                        <Text className="text-gray-500 font-medium text-center">Continue as Guest</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
