import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/Card';
import { ProgressBar } from '../../components/ProgressBar';

export default function DeskScreen() {
    const router = useRouter();
    const [remindersEnabled, setRemindersEnabled] = useState(true);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row justify-between items-start mb-6">
                    <View>
                        <Text className="text-2xl font-bold text-dark">Desk Health</Text>
                        <Text className="text-gray-500">Stay mobile while you work.</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/profile')}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                            className="w-10 h-10 rounded-full bg-gray-200"
                        />
                    </TouchableOpacity>
                </View>

                {/* Streak Card */}
                <LinearGradient
                    colors={['#6C63FF', '#5A52D5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="rounded-2xl p-6 mb-8 shadow-sm"
                >
                    <View className="flex-row justify-between items-start mb-6">
                        <View>
                            <Text className="text-white/80 font-medium mb-1">Desk Streak</Text>
                            <Text className="text-4xl font-bold text-white">3 Days</Text>
                        </View>
                        <View className="items-end">
                            <Text className="text-white/80 font-medium mb-1">Today</Text>
                            <Text className="text-xl font-bold text-white">2/8 Breaks</Text>
                        </View>
                    </View>
                    <ProgressBar progress={0.25} color="bg-white" className="bg-black/20 h-2" />
                </LinearGradient>

                {/* Reminders Card */}
                <Card className="flex-row items-center p-4 mb-8">
                    <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mr-4">
                        <Ionicons name="notifications" size={24} color="#5A52D5" />
                    </View>
                    <View className="flex-1 mr-4">
                        <Text className="text-dark font-bold text-base">Hourly Reminders</Text>
                        <Text className="text-gray-500 text-xs">Every 60 mins • 9AM - 5PM</Text>
                    </View>
                    <Switch
                        value={remindersEnabled}
                        onValueChange={setRemindersEnabled}
                        trackColor={{ false: "#E2E8F0", true: "#0F9D88" }}
                    />
                </Card>

                {/* Quick Routines */}
                <Text className="text-lg font-bold text-dark mb-4">Quick Routines</Text>
                <View className="flex-row justify-between mb-8">
                    <RoutineCard
                        title="Neck Relief"
                        time="3 mins • Mobility"
                        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=300"
                    />
                    <RoutineCard
                        title="Eye Break"
                        time="2 mins • Vision"
                        image="https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?q=80&w=300"
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

function RoutineCard({ title, time, image }: { title: string, time: string, image: string }) {
    return (
        <TouchableOpacity className="w-[48%] bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
            <Image
                source={{ uri: image }}
                className="w-full h-24 rounded-lg bg-gray-200 mb-3"
            />
            <Text className="text-dark font-bold text-base mb-1">{title}</Text>
            <Text className="text-gray-500 text-xs">{time}</Text>
        </TouchableOpacity>
    );
}
