import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ActivityScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('All');

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="px-6 pt-2 pb-4">
                <View className="flex-row justify-between items-center mb-4">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#1A202C" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="settings-outline" size={24} color="#1A202C" />
                    </TouchableOpacity>
                </View>
                <Text className="text-3xl font-bold text-dark mb-1">Tribe Activity</Text>
                <Text className="text-gray-500">What your tribes are up to today</Text>
            </View>

            {/* Tabs */}
            <View className="flex-row px-6 mb-4 border-b border-gray-100">
                {['All', 'My Tribes', 'Reminders'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        className={`mr-6 pb-2 ${activeTab === tab ? 'border-b-2 border-green-500' : ''}`}
                    >
                        <Text className={`font-bold ${activeTab === tab ? 'text-green-500' : 'text-gray-400'}`}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>

                {/* Momentum Alert */}
                <View className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-4">
                    <Text className="text-green-500 text-[10px] font-bold uppercase mb-2">MOMENTUM ALERT</Text>
                    <View className="flex-row items-start justify-between">
                        <View className="flex-row items-center flex-1 mr-2">
                            <View className="w-10 h-10 rounded-full bg-green-100 items-center justify-center mr-3">
                                <Ionicons name="people" size={20} color="#10B981" />
                            </View>
                            <View>
                                <Text className="text-xl font-bold text-dark">18 members active now</Text>
                                <Text className="text-gray-500 text-xs">Morning Mobility Tribe</Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row items-center justify-between mt-4">
                        <View className="flex-row pl-2">
                            {[1, 2, 3].map((_, i) => (
                                <View key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-2 overflow-hidden">
                                    <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 20}` }} className="w-full h-full" />
                                </View>
                            ))}
                            <View className="w-8 h-8 rounded-full bg-gray-50 border-2 border-white -ml-2 items-center justify-center">
                                <Text className="text-[10px] text-gray-500 font-bold">+15</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => router.push('/community/1')}
                            className="bg-gray-900 px-4 py-2 rounded-full"
                        >
                            <Text className="text-white font-bold text-xs">View Tribe</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Streak Alert */}
                <View className="bg-orange-50 p-5 rounded-3xl border border-orange-100 mb-4">
                    <View className="flex-row items-center mb-4">
                        <View className="w-10 h-10 rounded-full bg-white items-center justify-center mr-3 shadow-sm">
                            <Ionicons name="flame" size={20} color="#ED8936" />
                        </View>
                        <View>
                            <Text className="text-lg font-bold text-dark">You're on a 3-day streak!</Text>
                            <Text className="text-gray-500 text-xs">Don't break the chain today.</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-orange-500 py-3 rounded-full items-center shadow-sm">
                        <Text className="text-white font-bold">Mark Today's Activity</Text>
                    </TouchableOpacity>
                </View>

                {/* Feed Item */}
                <View className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-4 flex-row items-start">
                    <View className="relative mr-3">
                        <Image source={{ uri: 'https://i.pravatar.cc/150?img=5' }} className="w-10 h-10 rounded-full" />
                        <View className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border-2 border-white" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-dark"><Text className="font-bold">Riya</Text> completed today's <Text className="font-bold">Mobility Flow</Text></Text>
                        <View className="bg-gray-100 self-start px-2 py-1 rounded-md mt-1">
                            <Text className="text-gray-500 text-[10px]">Morning Mobility</Text>
                        </View>
                    </View>
                    <Text className="text-gray-400 text-xs">5m</Text>
                </View>

                {/* Reminder */}
                <View className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-4 flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3">
                            <Ionicons name="time" size={20} color="#4A5568" />
                        </View>
                        <View>
                            <Text className="text-gray-400 text-[10px] uppercase font-bold">DESK WORKERS TRIBE</Text>
                            <Text className="text-dark font-bold">Time to stretch</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-full">
                        <Text className="text-white font-bold text-xs">Do Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Consistency Alert */}
                <View className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm mb-4">
                    <View className="flex-row items-start mb-3">
                        <View className="w-10 h-10 rounded-full bg-yellow-100 items-center justify-center mr-3">
                            <Ionicons name="trophy" size={20} color="#D69E2E" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-dark font-bold leading-5 mb-1">Hydration Squad consistency dropped today</Text>
                            <Text className="text-gray-500 text-xs">Only 40% of members logged water intake.</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="border border-gray-200 py-3 rounded-2xl items-center">
                        <Text className="text-dark font-bold text-sm">Help the Tribe</Text>
                    </TouchableOpacity>
                </View>

                {/* Social Item */}
                <View className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-4 flex-row items-center">
                    <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} className="w-10 h-10 rounded-full mr-3" />
                    <View className="flex-1">
                        <Text className="text-dark"><Text className="font-bold">Marcus</Text> hit a PR on Deadlifts!</Text>
                        <View className="bg-gray-100 self-start px-2 py-1 rounded-md mt-1">
                            <Text className="text-gray-500 text-[10px]">Powerlifters</Text>
                        </View>
                    </View>
                    <View className="items-end">
                        <Text className="text-gray-400 text-xs mb-2">25m</Text>
                        <View className="flex-row gap-3">
                            <Ionicons name="thumbs-up" size={16} color="#718096" />
                            <Ionicons name="chatbubble" size={16} color="#718096" />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
