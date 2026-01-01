import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../store/useAuthStore';

export default function ProfileScreen() {
    const router = useRouter();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        router.replace('/auth/choice');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />

            {/* Header */}
            <View className="flex-row justify-between items-center px-6 pt-2 mb-6">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#1A202C" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-dark">Profile</Text>
                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={24} color="#1A202C" />
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                {/* User Info */}
                <View className="flex-row items-center mb-8">
                    <View className="relative">
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                            className="w-20 h-20 rounded-full bg-gray-200"
                        />
                        <View className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                    </View>
                    <View className="ml-4">
                        <Text className="text-2xl font-bold text-dark">{user?.name || 'Alex Fitness'}</Text>
                        <Text className="text-gray-500 text-sm">Ready for your next workout?</Text>
                    </View>
                </View>

                {/* Plan Overview Card */}
                <Text className="text-lg font-bold text-dark mb-4">My Plan Overview</Text>
                <View className="bg-white border border-gray-100 rounded-2xl p-5 mb-8 shadow-sm">
                    <OverviewRow label="Goal" value="Build Muscle" />
                    <OverviewRow label="Workout Days" value="5 days/week" />
                    <OverviewRow label="Duration" value="45 min" isLast />
                </View>

                {/* Stats Grid */}
                <View className="flex-row flex-wrap justify-between mb-8">
                    <StatCard value="28" label="Current Streak (days)" color="text-green-500" />
                    <StatCard value="125" label="Total Workouts Completed" color="text-green-500" />
                    <StatCard value="60" label="Desk Sessions Done" color="text-green-500" />
                    <StatCard value="14" label="Challenges Joined" color="text-green-500" />
                </View>

                {/* Settings List */}
                <Text className="text-lg font-bold text-dark mb-4">Settings</Text>
                <View className="mb-8">
                    <SettingItem icon="create-outline" label="Reminder Settings" />
                    <SettingItem icon="notifications-outline" label="Notifications" />
                    <SettingItem icon="person-outline" label="Account & Privacy" />
                    <SettingItem
                        icon="log-out-outline"
                        label="Logout"
                        color="text-red-500"
                        iconColor="#EF4444"
                        onPress={handleLogout}
                        hideChevron
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

function OverviewRow({ label, value, isLast }: { label: string, value: string, isLast?: boolean }) {
    return (
        <View className={`flex-row justify-between py-3 ${!isLast ? 'border-b border-gray-50' : ''}`}>
            <Text className="text-gray-500">{label}</Text>
            <Text className="text-dark font-bold">{value}</Text>
        </View>
    );
}

function StatCard({ value, label, color }: { value: string, label: string, color: string }) {
    return (
        <View className="w-[48%] bg-white border border-gray-50 rounded-2xl p-4 mb-4 items-center justify-center shadow-sm">
            <Text className={`text-3xl font-bold mb-1 ${color}`}>{value}</Text>
            <Text className="text-gray-500 text-xs text-center">{label}</Text>
        </View>
    );
}

function SettingItem({ icon, label, color = "text-dark", iconColor = "#0F9D88", onPress, hideChevron }: any) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center py-4 border-b border-gray-50"
        >
            <View className="w-8">
                <Ionicons name={icon} size={22} color={iconColor} />
            </View>
            <Text className={`flex-1 font-medium ${color} ml-2`}>{label}</Text>
            {!hideChevron && <Ionicons name="chevron-forward" size={20} color="#CBD5E0" />}
        </TouchableOpacity>
    );
}
