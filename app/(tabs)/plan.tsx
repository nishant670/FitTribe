import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlanScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="flex-1">
                {/* Header */}
                <View className="px-6 pt-2 pb-4 flex-row justify-between items-center bg-white border-b border-gray-100">
                    <Text className="text-xl font-bold text-dark">Muscle Build</Text>
                    <View className="flex-row items-center gap-4">
                        <TouchableOpacity>
                            <Ionicons name="notifications-outline" size={24} color="#1A202C" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                                className="w-9 h-9 rounded-full bg-gray-200"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

                    {/* Top Stats */}
                    <View className="flex-row justify-between px-6 py-6">
                        <StatBox label="UNLOCK" value="7:00" sub="AM" icon="time" />
                        <StatBox label="TOTAL" value="45" sub="Days" icon="calendar" />
                        <StatBox label="DONE" value="26%" sub="" icon="pie-chart" isGreen />
                    </View>

                    {/* Today's Focus Card */}
                    <View className="px-6 mb-8">
                        <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                            <View className="flex-row justify-between items-center mb-4">
                                <View className="bg-green-100 px-3 py-1 rounded-full">
                                    <Text className="text-primary font-bold text-xs uppercase">Today</Text>
                                </View>
                                <Text className="text-gray-400 text-sm">Oct 24</Text>
                            </View>

                            <Text className="text-2xl font-bold text-dark mb-2">Day 12: Full Body</Text>
                            <Text className="text-gray-500 leading-5 mb-6">
                                Compound movements to hit every muscle group. Focus on form and control.
                            </Text>

                            <View className="flex-row justify-between items-center">
                                <View className="flex-row pl-2">
                                    {[1, 2, 3].map((_, i) => (
                                        <View key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-2 items-center justify-center overflow-hidden">
                                            <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 5}` }} className="w-full h-full" />
                                        </View>
                                    ))}
                                    <View className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white -ml-2 items-center justify-center">
                                        <Text className="text-xs text-gray-500 font-bold">+5</Text>
                                    </View>
                                </View>

                                <TouchableOpacity className="bg-primary px-8 py-3 rounded-full shadow-lg shadow-primary/30 flex-row items-center">
                                    <Ionicons name="play" size={16} color="white" className="mr-2" />
                                    <Text className="text-white font-bold text-base ml-2">Start</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Schedule Grid */}
                    <View className="px-6 mb-8">
                        <View className="flex-row justify-between items-end mb-4">
                            <Text className="text-lg font-bold text-dark">Your Schedule</Text>
                            <TouchableOpacity><Text className="text-primary font-bold">View Full</Text></TouchableOpacity>
                        </View>

                        <View className="flex-row flex-wrap justify-between gap-y-4">
                            {/* Past Days */}
                            {[1, 2, 3, 4, 5].map(d => <DayCircle key={d} day={d} status="done" />)}

                            {/* Recent Past */}
                            {[6, 7, 8, 9, 10, 11].map(d => <DayCircle key={d} day={d} status="done" />)}

                            {/* Today */}
                            <DayCircle day={12} status="today" />

                            {/* Future */}
                            <DayCircle day={13} status="locked" />
                            <DayCircle day={14} status="locked" />
                        </View>
                    </View>


                    {/* Recent Activity */}
                    <View className="px-6 pb-12">
                        <Text className="text-lg font-bold text-dark mb-4">Recent Activity</Text>
                        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                            <ActivityItem
                                day="Day 11"
                                title="Active Rest"
                                time="Completed yesterday"
                                icon="bed"
                                duration="30 min"
                            />
                            <View className="h-[1px] bg-gray-50 my-2 ml-14" />
                            <ActivityItem
                                day="Day 10"
                                title="Strength Training"
                                time="Oct 21 at 6:45 PM"
                                icon="barbell"
                                duration="45 min"
                            />
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

function StatBox({ label, value, sub, icon, isGreen }: any) {
    return (
        <View className="bg-white w-[31%] p-3 rounded-2xl shadow-sm border border-gray-100 items-start min-h-[100px] justify-between">
            <View className="flex-row items-center mb-2">
                <Ionicons name={icon} size={14} color={isGreen ? "#0F9D88" : "#A0AEC0"} />
                <Text className={`text-[10px] font-bold ml-1 uppercase ${isGreen ? 'text-primary' : 'text-gray-400'}`}>{label}</Text>
            </View>
            <View>
                <Text className={`text-2xl font-bold ${isGreen ? 'text-primary' : 'text-dark'}`}>{value}</Text>
                {sub ? <Text className="text-gray-500 text-xs font-bold">{sub}</Text> : null}
            </View>
        </View>
    );
}

function DayCircle({ day, status }: { day: number, status: 'done' | 'today' | 'locked' }) {
    if (status === 'done') {
        return (
            <View className="w-[18%] aspect-square bg-primary rounded-full items-center justify-center mb-2 shadow-sm">
                <Text className="text-white/60 text-[8px] font-bold uppercase mb-[-2px]">Day</Text>
                <Text className="text-white text-xl font-bold">{day}</Text>
            </View>
        );
    }
    if (status === 'today') {
        return (
            <View className="w-[18%] aspect-square bg-white border-2 border-primary rounded-full items-center justify-center mb-2 shadow-sm">
                <Text className="text-primary/60 text-[8px] font-bold uppercase mb-[-2px]">Today</Text>
                <Text className="text-primary text-xl font-bold">{day}</Text>
            </View>
        );
    }
    return (
        <View className="w-[18%] aspect-square bg-gray-100 rounded-full items-center justify-center mb-2">
            <Ionicons name="lock-closed" size={16} color="#CBD5E0" />
            <Text className="text-gray-400 text-[10px] mt-1">{day}</Text>
        </View>
    );
}


function ActivityItem({ day, title, time, icon, duration }: any) {
    return (
        <View className="flex-row items-center py-2">
            <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${icon === 'bed' ? 'bg-blue-100' : 'bg-green-100'}`}>
                <Ionicons name={icon} size={22} color={icon === 'bed' ? '#4299E1' : '#0F9D88'} />
            </View>
            <View className="flex-1">
                <Text className="text-dark font-bold text-base">{day}: {title}</Text>
                <Text className="text-gray-400 text-xs">{time}</Text>
            </View>
            <View className="items-end">
                <Text className="text-primary font-bold text-sm">Done</Text>
                <Text className="text-gray-400 text-xs">{duration}</Text>
            </View>
        </View>
    );
}
