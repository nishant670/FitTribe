import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { ProgressBar } from '../../components/ProgressBar';
import { StatusChip } from '../../components/StatusChip';
import { useAuthStore } from '../../store/useAuthStore';

export default function HomeScreen() {
    const router = useRouter();
    const { user } = useAuthStore();
    const userName = user?.name || "Guest";

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row justify-between items-center mb-6">
                    <View>
                        <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider">Good Morning</Text>
                        <Text className="text-2xl font-bold text-dark">{userName}</Text>
                    </View>
                    <TouchableOpacity
                        className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"
                        onPress={() => router.push('/profile')}
                    >
                        {/* Avatar placeholder */}
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                            className="w-full h-full"
                        />
                    </TouchableOpacity>
                </View>

                {/* Progress */}
                <View className="mb-8">
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-600 font-medium">Day <Text className="text-dark font-bold">12</Text> of 45</Text>
                        <Text className="text-primary font-bold">26%</Text>
                    </View>
                    <ProgressBar progress={0.26} />
                </View>

                {/* Streak Card */}
                <View className="bg-secondary-light p-4 rounded-xl flex-row items-center mb-8 border border-secondary/20 shadow-sm">
                    <View className="w-10 h-10 rounded-full bg-white bg-opacity-50 items-center justify-center mr-4">
                        <Ionicons name="flame" size={24} color="#FFAB40" />
                    </View>
                    <View>
                        <Text className="text-secondary font-bold text-lg">5 Day Streak!</Text>
                        <Text className="text-secondary opacity-80 text-xs">Keep it up, you're on fire.</Text>
                    </View>
                </View>

                {/* Today's Workout */}
                <Text className="text-lg font-bold text-dark mb-4">Today's Workout</Text>
                <Card className="mb-8 p-0 overflow-hidden">
                    <View className="p-4 flex-row">
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=300' }}
                            className="w-24 h-24 rounded-xl mr-4 bg-gray-200"
                        />
                        <View className="flex-1 justify-between">
                            <View>
                                <View className="flex-row justify-between items-start">
                                    <Text className="text-xl font-bold text-dark flex-1">Full Body</Text>
                                    <StatusChip status="unlocked" className="scale-90 origin-right" />
                                </View>
                                <Text className="text-gray-500 text-sm">45 min • Intermediate</Text>
                            </View>
                            <View className="flex-row space-x-2 mt-2">
                                <View className="bg-gray-100 px-2 py-1 rounded text-xs"><Text className="text-gray-600 text-[10px]">Strength</Text></View>
                                <View className="bg-gray-100 px-2 py-1 rounded text-xs"><Text className="text-gray-600 text-[10px]">Dumbbells</Text></View>
                            </View>
                        </View>
                    </View>
                    <View className="px-4 pb-4">
                        <Button title="Start Workout" onPress={() => { }} className="bg-dark w-full py-3" />
                    </View>
                </Card>

                {/* Upcoming */}
                <Text className="text-lg font-bold text-dark mb-4">Upcoming</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8 pl-1">
                    {[13, 14, 15].map(day => (
                        <View key={day} className="bg-white border border-gray-100 w-32 h-32 rounded-2xl mr-4 p-4 items-center justify-center opacity-70">
                            <Text className="text-gray-400 font-bold mb-2">Day {day}</Text>
                            <Ionicons name="lock-closed" size={24} color="#CBD5E0" />
                        </View>
                    ))}
                </ScrollView>

            </ScrollView>
        </SafeAreaView>
    );
}
