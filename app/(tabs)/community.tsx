import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CommunityScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row justify-between items-center px-6 pt-4 mb-6">
                <Text className="text-2xl font-bold text-dark">Your Tribes</Text>
                <View className="flex-row items-center gap-4">
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="#1A202C" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="compass-outline" size={24} color="#1A202C" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <Text className="px-6 text-gray-500 text-sm mb-6">Show up together, stay consistent</Text>

                {/* Today in Your Tribes */}
                <View className="mb-8">
                    <View className="flex-row justify-between items-center px-6 mb-4">
                        <Text className="text-lg font-bold text-dark">Today in Your Tribes</Text>
                        <TouchableOpacity><Text className="text-primary font-bold text-sm">View All</Text></TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}>
                        {/* Active Card */}
                        <View className="w-80 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mr-4">
                            <View className="flex-row justify-between items-start mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
                                        <Ionicons name="sunny" size={20} color="#4299E1" />
                                    </View>
                                    <View>
                                        <Text className="text-dark font-bold text-base">Morning Mobility</Text>
                                        <View className="flex-row items-center">
                                            <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                            <Text className="text-gray-400 text-xs">Today, 10 min</Text>
                                        </View>
                                    </View>
                                </View>
                                <View className="bg-green-100 px-3 py-1.5 rounded-lg">
                                    <Text className="text-green-600 text-[10px] font-bold">Active Now</Text>
                                </View>
                            </View>

                            <Text className="text-xl font-bold text-dark mb-1">Daily Spinal Flow</Text>
                            <Text className="text-gray-500 text-sm mb-4">Focus on upper back and neck release.</Text>

                            <View className="flex-row justify-between items-center">
                                <View className="flex-row items-center">
                                    <View className="flex-row pl-2">
                                        {[1, 2].map((_, i) => (
                                            <View key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white -ml-2 overflow-hidden">
                                                <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 4}` }} className="w-full h-full" />
                                            </View>
                                        ))}
                                        <View className="w-6 h-6 rounded-full bg-gray-100 border border-white -ml-2 items-center justify-center">
                                            <Text className="text-[8px] text-gray-500 font-bold">+15</Text>
                                        </View>
                                    </View>
                                    <Text className="text-gray-400 text-[10px] ml-1">18 of 42 completed</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={() => router.push('/community/1')}
                                    className="bg-green-500 px-4 py-2 rounded-full shadow-lg shadow-green-200"
                                >
                                    <Text className="text-white font-bold text-xs">Mark as Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Desk Health Tribe - New */}
                        <View className="w-80 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mr-4">
                            <View className="flex-row justify-between items-start mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center mr-3">
                                        <Ionicons name="desktop" size={20} color="#805AD5" />
                                    </View>
                                    <View>
                                        <Text className="text-dark font-bold text-base">Desk Health</Text>
                                        <View className="flex-row items-center">
                                            <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                            <Text className="text-gray-400 text-xs">Posture Check</Text>
                                        </View>
                                    </View>
                                </View>
                                <View className="bg-purple-50 px-3 py-1.5 rounded-lg">
                                    <Text className="text-purple-600 text-[10px] font-bold">New Post</Text>
                                </View>
                            </View>

                            <Text className="text-xl font-bold text-dark mb-1">Hourly Stretch</Text>
                            <Text className="text-gray-500 text-sm mb-4">Quick neck and shoulder relief.</Text>

                            <View className="flex-row justify-between items-center">
                                <View className="flex-row items-center">
                                    <View className="flex-row pl-2">
                                        {[1, 2, 3].map((_, i) => (
                                            <View key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white -ml-2 overflow-hidden">
                                                <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 60}` }} className="w-full h-full" />
                                            </View>
                                        ))}
                                    </View>
                                    <Text className="text-gray-400 text-[10px] ml-1">200+ joined</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={() => router.push('/community/desk-health')}
                                    className="border border-purple-200 bg-purple-50 px-4 py-2 rounded-full"
                                >
                                    <Text className="text-purple-700 font-bold text-xs">Join Session</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Waiting Card */}
                        <View className="w-80 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm opacity-80">
                            <View className="flex-row justify-between items-start mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 rounded-full bg-orange-100 items-center justify-center mr-3">
                                        <Ionicons name="walk" size={20} color="#ED8936" />
                                    </View>
                                    <View>
                                        <Text className="text-dark font-bold text-base">5k Runners</Text>
                                        <Text className="text-gray-400 text-xs">Wed, Tempo Run</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="flex-row justify-between items-center mt-8">
                                <View className="flex-row items-center bg-gray-50 px-3 py-1 rounded-full">
                                    <Ionicons name="people" size={14} color="#718096" className="mr-2" />
                                    <Text className="text-gray-500 text-xs font-bold">Waitin' on you!</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={() => router.push('/community/2')}
                                    className="border border-gray-200 px-4 py-2 rounded-full"
                                >
                                    <Text className="text-dark font-bold text-xs">View Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* Tribe Snapshots */}
                <View className="px-6 mb-8">
                    <Text className="text-lg font-bold text-dark mb-4">Tribe Snapshots</Text>

                    <TouchableOpacity onPress={() => router.push('/community/1')} className="flex-row items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-3">
                        <View className="w-12 h-12 rounded-full border-4 border-green-100 items-center justify-center mr-4">
                            <Text className="text-green-500 font-bold text-xs">80%</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="text-dark font-bold text-base">Hydration Squad</Text>
                            <View className="flex-row items-center">
                                <Ionicons name="flame" size={12} color="#ED8936" className="mr-1" />
                                <Text className="text-orange-500 text-xs font-bold mr-2">12 Day Streak</Text>
                                <Text className="text-gray-400 text-xs">| 156 Members</Text>
                            </View>
                        </View>
                        <View className="bg-green-50 px-2 py-1 rounded">
                            <Text className="text-green-600 text-[10px] font-bold uppercase">Active</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/community/2')} className="flex-row items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-3">
                        <View className="w-12 h-12 rounded-full border-4 border-gray-100 items-center justify-center mr-4">
                            <Text className="text-gray-400 font-bold text-xs">33%</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="text-dark font-bold text-base">Weekend Hikers</Text>
                            <View className="flex-row items-center">
                                <Ionicons name="flame-outline" size={12} color="#A0AEC0" className="mr-1" />
                                <Text className="text-gray-400 text-xs font-bold mr-2">No Streak</Text>
                                <Text className="text-gray-400 text-xs">| 84 Members</Text>
                            </View>
                        </View>
                        <View className="bg-gray-50 px-2 py-1 rounded">
                            <Text className="text-gray-400 text-[10px] font-bold uppercase">Quiet</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Discover Tribes */}
                <View className="px-6 pb-24">
                    <Text className="text-lg font-bold text-dark mb-4">Discover Tribes</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible">
                        <View className="w-64 mr-4">
                            <View className="h-40 bg-gray-800 rounded-2xl mb-3 relative overflow-hidden">
                                <Image source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400' }} className="w-full h-full opacity-60" />
                                <View className="absolute inset-0 p-4 justify-end">
                                    <View className="flex-row gap-2 mb-2">
                                        <View className="bg-white/20 px-2 py-1 rounded"><Text className="text-white text-[10px]">Strength</Text></View>
                                        <View className="bg-white/20 px-2 py-1 rounded"><Text className="text-white text-[10px]">HIIT</Text></View>
                                    </View>
                                    <Text className="text-white font-bold text-xl">Kettlebell Power</Text>
                                </View>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <View>
                                    <Text className="text-gray-400 text-xs mb-1">⚡ Daily: 15 mins intense</Text>
                                    <View className="flex-row items-center">
                                        <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                        <Text className="text-gray-500 text-xs">24 active now</Text>
                                    </View>
                                </View>
                                <TouchableOpacity><Text className="text-green-500 font-bold text-sm">Join Tribe</Text></TouchableOpacity>
                            </View>
                        </View>

                        <View className="w-64 mr-4">
                            <View className="h-40 bg-gray-800 rounded-2xl mb-3 relative overflow-hidden">
                                <Image source={{ uri: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=400' }} className="w-full h-full opacity-60" />
                                <View className="absolute inset-0 p-4 justify-end">
                                    <View className="flex-row gap-2 mb-2">
                                        <View className="bg-white/20 px-2 py-1 rounded"><Text className="text-white text-[10px]">Mindfulness</Text></View>
                                    </View>
                                    <Text className="text-white font-bold text-xl">Zen Masters</Text>
                                </View>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <View>
                                    <Text className="text-gray-400 text-xs mb-1">🧘‍♀️ Daily: 5 mins</Text>
                                    <View className="flex-row items-center">
                                        <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                        <Text className="text-gray-500 text-xs">112 active now</Text>
                                    </View>
                                </View>
                                <TouchableOpacity><Text className="text-green-500 font-bold text-sm">Join Tribe</Text></TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
