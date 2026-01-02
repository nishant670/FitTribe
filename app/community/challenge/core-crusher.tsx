import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChallengeDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-1">
                {/* Header */}
                <View className="flex-row items-center px-6 py-4 absolute top-0 left-0 right-0 z-10 mt-8">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 bg-white/20 rounded-full items-center justify-center backdrop-blur-md"
                    >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                    {/* Hero Section */}
                    <View className="h-[400px] bg-gray-900 relative">
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000' }}
                            className="w-full h-full opacity-80"
                            resizeMode="cover"
                        />
                        <LinearGradient
                            colors={['transparent', '#000000']}
                            className="absolute inset-0"
                            start={{ x: 0.5, y: 0.3 }}
                            end={{ x: 0.5, y: 1 }}
                        />

                        <View className="absolute bottom-0 left-0 right-0 p-6">
                            <View className="flex-row gap-2 mb-3">
                                <View className="bg-green-500 px-3 py-1 rounded-full flex-row items-center">
                                    <Ionicons name="people" size={12} color="white" className="mr-1" />
                                    <Text className="text-white text-[10px] font-bold uppercase">TRIBE EVENT</Text>
                                </View>
                                <View className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                    <Text className="text-white text-[10px] font-bold">Fitness</Text>
                                </View>
                            </View>

                            <Text className="text-4xl font-bold text-white mb-2 leading-tight">30-Day Core{'\n'}Crusher</Text>

                            <View className="flex-row items-center">
                                <Ionicons name="flag" size={16} color="white" className="mr-2 opacity-80" />
                                <Text className="text-white/80 font-bold">Hosted by: Early Risers Tribe</Text>
                            </View>
                        </View>
                    </View>

                    <View className="px-6 -mt-6">
                        {/* Stats Row */}
                        <View className="flex-row justify-between mb-6">
                            <StatBox label="Duration" value="30 Days" icon="calendar" />
                            <StatBox label="Format" value="Team" icon="people" />
                            <StatBox label="Tribe XP" value="5000 XP" icon="trophy" />
                        </View>

                        {/* Progress Card */}
                        <View className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-6">
                            <View className="flex-row justify-between items-start mb-2">
                                <View>
                                    <Text className="text-lg font-bold text-dark">Tribe Progress</Text>
                                    <Text className="text-gray-400 text-xs">Collective completion rate</Text>
                                </View>
                                <Text className="text-2xl font-bold text-green-500">68%</Text>
                            </View>

                            <View className="h-3 bg-gray-100 rounded-full overflow-hidden mb-2 relative">
                                <View className="h-full bg-green-500 w-[68%] rounded-full" />
                            </View>

                            <View className="flex-row justify-between">
                                <Text className="text-gray-400 text-[10px]">Start</Text>
                                <Text className="text-green-500 text-[10px] font-bold">Current Pace</Text>
                                <Text className="text-gray-400 text-[10px]">Goal</Text>
                            </View>
                        </View>

                        {/* Members */}
                        <View className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-8 flex-row justify-between items-center">
                            <View>
                                <Text className="font-bold text-dark mb-2 text-sm">12 tribe members participating</Text>
                                <View className="flex-row pl-2">
                                    {[1, 2, 3].map((_, i) => (
                                        <View key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-2 overflow-hidden">
                                            <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 30}` }} className="w-full h-full" />
                                        </View>
                                    ))}
                                    <View className="w-8 h-8 rounded-full bg-gray-50 border-2 border-white -ml-2 items-center justify-center">
                                        <Text className="text-[10px] text-gray-500 font-bold">+9</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity className="w-8 h-8 bg-gray-50 rounded-full items-center justify-center">
                                <Ionicons name="chevron-forward" size={16} color="#A0AEC0" />
                            </TouchableOpacity>
                        </View>

                        {/* Details */}
                        <Text className="text-lg font-bold text-dark mb-3">About the Challenge</Text>
                        <Text className="text-gray-500 leading-6 mb-8 text-sm">
                            Rally your tribe for a 30-day core intensive! This program is designed for group accountability. Every workout completed by a member contributes to the tribe's total score. Push each other to build stability, strength, and endurance together.
                        </Text>

                        <Text className="text-lg font-bold text-dark mb-4">Tribe Rules</Text>

                        <RuleItem
                            icon="checkmark-circle"
                            color="#10B981"
                            title="Daily Contribution"
                            desc="Every member's daily workout adds 1 point to the tribe total."
                        />
                        <RuleItem
                            icon="people"
                            color="#10B981" // Assuming green for generic positive vibe
                            title="Sync Bonus"
                            desc="Workout at the same time as 3 other members for extra XP."
                        />
                    </View>
                </ScrollView>

                {/* Sticky Footer */}
                <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 pt-4 pb-8 shadow-lg">
                    <TouchableOpacity className="bg-green-500 w-full py-4 rounded-2xl flex-row items-center justify-center shadow-lg shadow-green-200">
                        <Ionicons name="people" size={20} color="white" className="mr-2" />
                        <Text className="text-white font-bold text-lg">Participate with Tribe</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

function StatBox({ label, value, icon }: any) {
    return (
        <View className="bg-white w-[31%] p-3 py-4 rounded-2xl shadow-sm border border-gray-100 items-center">
            <Ionicons name={icon} size={20} color={label === "Tribe XP" ? "#F6AD55" : "#10B981"} className="mb-2" />
            <Text className="text-gray-400 text-[10px] uppercase mb-1">{label}</Text>
            <Text className="text-dark font-bold text-sm">{value}</Text>
        </View>
    );
}

function RuleItem({ icon, color, title, desc }: any) {
    return (
        <View className="flex-row items-start bg-white p-4 rounded-2xl border border-gray-100 mb-4">
            <View className={`w-10 h-10 rounded-full items-center justify-center mr-4 bg-green-50`}>
                <Ionicons name={icon} size={20} color={color} />
            </View>
            <View className="flex-1">
                <Text className="text-dark font-bold text-base mb-1">{title}</Text>
                <Text className="text-gray-500 text-xs leading-5">{desc}</Text>
            </View>
        </View>
    );
}
