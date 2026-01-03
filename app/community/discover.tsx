import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DiscoverTribeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="px-6 pt-2 pb-4">
                <Text className="text-3xl font-bold text-dark mb-1">Discover Tribes</Text>
                <Text className="text-gray-500 mb-6">Find people you want to show up with</Text>

                {/* Search */}
                <View className="flex-row items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                    <Ionicons name="search" size={20} color="#A0AEC0" className="mr-3" />
                    <TextInput
                        placeholder="Search tribes (e.g. yoga, running...)"
                        className="flex-1 text-dark text-base"
                        placeholderTextColor="#A0AEC0"
                    />
                </View>

                {/* Filters */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-2">
                    {['Strength', 'Yoga', 'Running', 'Desk/WFH', 'Mindfulness'].map((filter, index) => (
                        <TouchableOpacity
                            key={index}
                            className={`px-6 py-2 rounded-full mr-3 ${index === 0 ? 'bg-black' : 'bg-white border border-gray-200'}`}
                        >
                            <Text className={`font-bold ${index === 0 ? 'text-white' : 'text-dark'}`}>{filter}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

                {/* Trending Tribes */}
                <View className="mb-8">
                    <View className="flex-row justify-between items-center px-6 mb-4">
                        <Text className="text-xl font-bold text-dark">Trending Tribes</Text>
                        <TouchableOpacity><Text className="text-green-500 font-bold text-sm">See all</Text></TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24 }}>
                        {/* Card 1 */}
                        <View className="w-72 h-44 mr-4 rounded-3xl overflow-hidden relative bg-gray-900">
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400' }}
                                className="w-full h-full opacity-70"
                            />
                            <View className="absolute top-3 right-3 bg-gray-900/60 px-2 py-1 rounded-lg">
                                <View className="flex-row items-center">
                                    <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                                    <Text className="text-white text-[10px] font-bold">53 active now</Text>
                                </View>
                            </View>
                            <View className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <View className="flex-row justify-between items-end">
                                    <View>
                                        <Text className="text-white font-bold text-xl mb-1">Morning Runners</Text>
                                        <View className="flex-row items-center">
                                            <Ionicons name="flash" size={12} color="white" className="mr-1" />
                                            <Text className="text-white/80 text-xs">Daily: 5k Run</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-full">
                                        <Text className="text-white font-bold text-xs">Join</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* Card 2 */}
                        <View className="w-72 h-44 mr-4 rounded-3xl overflow-hidden relative bg-gray-900">
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=400' }}
                                className="w-full h-full opacity-70"
                            />
                            <View className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <View className="flex-row justify-between items-end">
                                    <View>
                                        <Text className="text-white font-bold text-xl mb-1">Zen Flow</Text>
                                        <View className="flex-row items-center">
                                            <Ionicons name="body" size={12} color="white" className="mr-1" />
                                            <Text className="text-white/80 text-xs">Daily: Yoga</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                                        <Text className="text-white font-bold text-xs">Full</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* Recommended */}
                <View className="mb-8">
                    <Text className="text-xl font-bold text-dark px-6 mb-4">Recommended for You</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24 }}>

                        {/* Rec Card 1 */}
                        <View className="w-64 bg-white p-4 rounded-3xl border border-gray-100 mr-4">
                            <View className="flex-row justify-between mb-4">
                                <View className="bg-purple-100 px-2 py-1 rounded">
                                    <Text className="text-purple-600 text-[10px] font-bold uppercase">Based on Interest</Text>
                                </View>
                                <Text className="text-gray-400 text-[10px]">Mobility</Text>
                            </View>
                            <Text className="text-lg font-bold text-dark mb-1">Mobility Masters</Text>
                            <View className="flex-row items-center mb-4">
                                <Ionicons name="people" size={12} color="#718096" className="mr-1" />
                                <Text className="text-gray-500 text-xs">1.2k members</Text>
                            </View>

                            <View className="bg-gray-50 p-3 rounded-2xl">
                                <Text className="text-gray-400 text-[10px] font-bold uppercase mb-1">TODAY'S COMMITMENT</Text>
                                <View className="flex-row items-center">
                                    <View className="w-4 h-4 rounded-full bg-green-500 items-center justify-center mr-2">
                                        <Ionicons name="time" size={10} color="white" />
                                    </View>
                                    <Text className="text-dark text-xs font-bold">10 min Hip Stretch</Text>
                                </View>
                            </View>
                        </View>

                        {/* Rec Card 2 */}
                        <View className="w-64 bg-white p-4 rounded-3xl border border-gray-100 mr-4">
                            <View className="flex-row justify-between mb-4">
                                <View className="bg-orange-100 px-2 py-1 rounded">
                                    <Text className="text-orange-600 text-[10px] font-bold uppercase">Popular Near You</Text>
                                </View>
                            </View>
                            <Text className="text-lg font-bold text-dark mb-1">Urban Hikers</Text>
                            <View className="flex-row items-center mb-4">
                                <Ionicons name="people" size={12} color="#718096" className="mr-1" />
                                <Text className="text-gray-500 text-xs">890 members</Text>
                            </View>

                            <View className="bg-gray-50 p-3 rounded-2xl">
                                <Text className="text-gray-400 text-[10px] font-bold uppercase mb-1">TODAY'S COMMITMENT</Text>
                                <View className="flex-row items-center">
                                    <View className="w-4 h-4 rounded-full bg-green-500 items-center justify-center mr-2">
                                        <Ionicons name="footsteps" size={10} color="white" />
                                    </View>
                                    <Text className="text-dark text-xs font-bold">10k Steps</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* All Tribes List */}
                <View className="px-6">
                    <Text className="text-xl font-bold text-dark mb-4">All Tribes</Text>

                    {/* List Item 1 */}
                    <View className="bg-white p-4 rounded-3xl border border-gray-100 mb-3 flex-row items-center">
                        <View className="w-12 h-12 bg-gray-50 rounded-full items-center justify-center mr-3">
                            <Text className="text-green-600 font-bold text-xs">WFH</Text>
                        </View>
                        <View className="flex-1">
                            <View className="flex-row justify-between">
                                <Text className="font-bold text-dark text-base">WFH Warriors</Text>
                                <Text className="text-gray-400 text-xs">234 online</Text>
                            </View>
                            <Text className="text-gray-500 text-xs mb-2">Focus • Productivity • Health</Text>
                            <View className="bg-green-50 self-start px-2 py-1 rounded">
                                <Text className="text-green-600 text-[10px] font-bold">Daily Check-in</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center ml-2">
                            <Ionicons name="add" size={20} color="#10B981" />
                        </TouchableOpacity>
                    </View>

                    {/* List Item 2 */}
                    <View className="bg-white p-4 rounded-3xl border border-gray-100 mb-3 flex-row items-center">
                        <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center mr-3">
                            <Ionicons name="barbell" size={20} color="#10B981" />
                        </View>
                        <View className="flex-1">
                            <View className="flex-row justify-between">
                                <Text className="font-bold text-dark text-base">Iron Society</Text>
                                <Text className="text-gray-400 text-xs">42 online</Text>
                            </View>
                            <Text className="text-gray-500 text-xs mb-2">Lifting • Strength • Power</Text>
                            <View className="bg-green-50 self-start px-2 py-1 rounded">
                                <Text className="text-green-600 text-[10px] font-bold">3x Week</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center ml-2">
                            <Ionicons name="add" size={20} color="#10B981" />
                        </TouchableOpacity>
                    </View>

                    {/* List Item 3 */}
                    <View className="bg-white p-4 rounded-3xl border border-gray-100 mb-3 flex-row items-center">
                        <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mr-3">
                            <Ionicons name="walk" size={20} color="#718096" />
                        </View>
                        <View className="flex-1">
                            <View className="flex-row justify-between">
                                <Text className="font-bold text-dark text-base">Couch to 5k</Text>
                                <Text className="text-gray-400 text-xs">89 online</Text>
                            </View>
                            <Text className="text-gray-500 text-xs mb-2">Running • Beginners • Support</Text>
                            <View className="bg-gray-100 self-start px-2 py-1 rounded">
                                <Text className="text-gray-600 text-[10px] font-bold">Daily</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="w-8 h-8 rounded-full border border-gray-200 items-center justify-center ml-2">
                            <Ionicons name="add" size={20} color="#10B981" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="items-center mt-4">
                        <Text className="text-gray-500 font-bold text-sm">View all categories</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            {/* Bottom Nav Placeholder is handled by Tabs, but if we wanted the + button overlay it would be here */}
        </SafeAreaView>
    );
}
