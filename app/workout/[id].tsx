import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { StatusChip } from '../../components/StatusChip';

export default function WorkoutDetailScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="light" />

            {/* Header Image */}
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600' }}
                className="h-72 w-full justify-between p-6"
                style={{ paddingTop: insets.top }}
            >
                <View className="absolute inset-0 bg-black/40" />

                <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mt-2">
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

                <View>
                    <StatusChip status="unlocked" className="mb-2 bg-primary self-start" text="DAY 12" />
                    <Text className="text-3xl font-bold text-white mb-1">Full Body Power</Text>
                    <Text className="text-gray-200">45 min • Intermediate • Dumbbells</Text>
                </View>
            </ImageBackground>

            <ScrollView className="flex-1 px-6 pt-6 -mt-6 bg-white rounded-t-3xl">
                <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Warm Up (5 Min)</Text>

                <ExerciseItem
                    icon="body"
                    title="Jumping Jacks"
                    duration="2 mins"
                />
                <ExerciseItem
                    icon="body"
                    title="Arm Circles"
                    duration="30 secs each way"
                />

                <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 mt-4">Main Circuit (3 Rounds)</Text>

                <CircuitItem
                    title="Goblet Squats"
                    reps="12 Reps"
                    rest="60s Rest"
                    checked={true}
                />

                <CircuitItem
                    title="Push-ups"
                    reps="15 Reps"
                    rest="45s Rest"
                    checked={true}
                />
                <CircuitItem
                    title="Dumbbell Rows"
                    reps="12 Reps / Side"
                    rest="60s Rest"
                    checked={false}
                />

                <View className="h-24" />
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
                <Button title="Mark as Completed" onPress={() => router.back()} />
            </View>
        </View>
    );
}

function ExerciseItem({ icon, title, duration }: { icon: string, title: string, duration: string }) {
    return (
        <View className="flex-row items-center bg-white border border-gray-100 p-4 rounded-xl mb-3 shadow-sm">
            <View className="w-12 h-12 bg-gray-100 rounded-lg items-center justify-center mr-4">
                <Ionicons name={icon as any} size={24} color="#718096" />
            </View>
            <View>
                <Text className="text-dark font-bold text-base">{title}</Text>
                <Text className="text-gray-500 text-sm">{duration}</Text>
            </View>
        </View>
    );
}

function CircuitItem({ title, reps, rest, checked }: { title: string, reps: string, rest: string, checked: boolean }) {
    return (
        <View className="bg-white border border-gray-100 p-4 rounded-xl mb-3 shadow-sm flex-row justify-between items-center">
            <View>
                <Text className="text-dark font-bold text-lg mb-2">{title}</Text>
                <View className="flex-row space-x-2">
                    <View className="bg-gray-100 px-2 py-1 rounded text-xs"><Text className="text-gray-600 font-semibold">{reps}</Text></View>
                    <View className="bg-gray-100 px-2 py-1 rounded text-xs"><Text className="text-gray-600 font-semibold">{rest}</Text></View>
                </View>
            </View>
            <TouchableOpacity className="w-8 h-8 rounded-full border-2 border-gray-200 items-center justify-center">
                {checked && (
                    <View className="w-full h-full rounded-full bg-primary/10 border-primary items-center justify-center">
                        <Ionicons name="checkmark" size={16} color="#0F9D88" />
                    </View>
                )}
                {!checked && <Ionicons name="checkmark" size={16} color="#CBD5E0" />}
            </TouchableOpacity>
        </View>
    );
}
