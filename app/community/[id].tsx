import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCommunityStore } from '../../store/useCommunityStore';

export default function TribeDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { posts, toggleLike } = useCommunityStore();
    const [activeTab, setActiveTab] = useState<'Feed' | 'Leaderboard'>('Feed');

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row justify-between items-center px-6 py-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#1A202C" />
                </TouchableOpacity>
                <Text className="text-lg font-bold text-dark">Tribe Details</Text>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={24} color="#1A202C" />
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Tribe Info */}
                <View className="items-center px-6 mb-8">
                    <View className="relative mb-4">
                        <View className="w-20 h-20 rounded-2xl bg-gray-900 items-center justify-center">
                            <Ionicons name="sunny-outline" size={40} color="#F6E05E" />
                        </View>
                        <View className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-white">
                            <Ionicons name="checkmark" size={12} color="white" />
                        </View>
                    </View>
                    <Text className="text-2xl font-bold text-dark mb-1">Early Risers Tribe</Text>
                    <Text className="text-gray-500 text-sm mb-4">Small daily wins, big results 🌱</Text>

                    <View className="flex-row items-center justify-between w-full">
                        <View className="flex-row pl-2">
                            {[1, 2, 3].map((_, i) => (
                                <View key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-2 items-center justify-center overflow-hidden">
                                    <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 15}` }} className="w-full h-full" />
                                </View>
                            ))}
                            <View className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white -ml-2 items-center justify-center">
                                <Text className="text-xs text-gray-500 font-bold">+39</Text>
                            </View>
                        </View>
                        <View className="bg-gray-100 px-6 py-2 rounded-full flex-row items-center">
                            <Ionicons name="checkmark-circle" size={16} color="#0F9D88" className="mr-2" />
                            <Text className="text-dark font-bold text-sm">Joined</Text>
                        </View>
                    </View>
                </View>

                {/* Commitment Card */}
                <View className="px-6 mb-8">
                    <View className="bg-gray-900 rounded-3xl p-6 relative overflow-hidden">
                        <View className="flex-row justify-between items-center mb-6">
                            <View className="bg-white/20 px-3 py-1 rounded-full">
                                <Text className="text-green-400 text-[10px] font-bold uppercase">Today's Commitment</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Ionicons name="time-outline" size={12} color="#CBD5E0" className="mr-1" />
                                <Text className="text-gray-400 text-xs">Unlocked 6:00 AM</Text>
                            </View>
                        </View>

                        <Text className="text-2xl font-bold text-white mb-2">20 Min HIIT Blast</Text>
                        <Text className="text-gray-400 text-sm mb-6">High intensity, no equipment needed.</Text>

                        <View className="mb-6">
                            <View className="flex-row justify-between mb-2">
                                <Text className="text-green-400 text-xs font-bold">23 done</Text>
                                <Text className="text-gray-500 text-xs font-bold">41 total</Text>
                            </View>
                            <View className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <View className="h-full bg-green-500 w-[56%]" />
                            </View>
                            <View className="flex-row items-center mt-3">
                                <View className="flex-row">
                                    {[1, 2].map((_, i) => (
                                        <View key={i} className="w-6 h-6 rounded-full bg-gray-600 border border-gray-900 -ml-2 first:ml-0 overflow-hidden">
                                            <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 20}` }} className="w-full h-full" />
                                        </View>
                                    ))}
                                </View>
                                <Text className="text-gray-500 text-xs ml-2">+20 others crushed it</Text>
                            </View>
                        </View>

                        <TouchableOpacity className="bg-green-500 w-full py-4 rounded-xl flex-row items-center justify-center">
                            <Ionicons name="checkmark" size={20} color="white" className="mr-2" />
                            <Text className="text-white font-bold text-base">I've Done This</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Tribe Snapshot */}
                <View className="px-6 mb-8">
                    <Text className="text-lg font-bold text-dark mb-4">Tribe Snapshot</Text>
                    <View className="flex-row flex-wrap justify-between gap-y-4">
                        <StatCard label="Consistency" value="56%" sub="~2%" />
                        <StatCard label="Active Today" value="38" sub="/42" />
                        <StatCard label="Top Streak" value="14d" sub="🔥" />
                        <StatCard label="Weekly Avg" value="82%" />
                    </View>
                </View>

                {/* Active Challenge Banner */}
                <TouchableOpacity
                    onPress={() => router.push('/community/challenge/core-crusher')}
                    className="mx-6 mb-8 bg-gray-900 rounded-2xl p-4 flex-row items-center relative overflow-hidden"
                >
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200' }}
                        className="absolute inset-0 opacity-40"
                    />
                    <View className="w-12 h-12 bg-green-500 rounded-xl items-center justify-center mr-4">
                        <Ionicons name="trophy" size={24} color="white" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-white font-bold text-lg">30-Day Core Crusher</Text>
                        <Text className="text-green-400 text-xs font-bold">ACTIVE EVENT • 12 Participating</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="white" />
                </TouchableOpacity>

                {/* Tabs */}
                <View className="px-6 mb-6">
                    <View className="flex-row bg-gray-100 p-1 rounded-full">
                        <TouchableOpacity
                            onPress={() => setActiveTab('Feed')}
                            className={`flex-1 py-2 rounded-full items-center ${activeTab === 'Feed' ? 'bg-white shadow-sm' : ''}`}
                        >
                            <Text className={`font-bold ${activeTab === 'Feed' ? 'text-dark' : 'text-gray-500'}`}>Tribe Feed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setActiveTab('Leaderboard')}
                            className={`flex-1 py-2 rounded-full items-center ${activeTab === 'Leaderboard' ? 'bg-white shadow-sm' : ''}`}
                        >
                            <Text className={`font-bold ${activeTab === 'Leaderboard' ? 'text-dark' : 'text-gray-500'}`}>Leaderboard</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Tab Content */}
                <View className="px-6 pb-12">
                    {activeTab === 'Feed' ? (
                        <>
                            <View className="bg-orange-50 p-4 rounded-xl flex-row items-start mb-6 border border-orange-100">
                                <View className="bg-orange-100 p-2 rounded-full mr-3">
                                    <Ionicons name="flame" size={16} color="#DD6B20" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-dark font-bold text-sm">Riya S. reached a <Text className="text-orange-600">7-day streak!</Text> She's on fire! 🔥</Text>
                                </View>
                            </View>

                            {posts.map(post => (
                                <FeedItem key={post.id} post={post} onLike={() => toggleLike(post.id)} />
                            ))}
                        </>
                    ) : (
                        <LeaderboardView />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function StatCard({ label, value, sub }: any) {
    return (
        <View className="w-[48%] bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <Text className="text-gray-500 text-xs mb-1">{label}</Text>
            <View className="flex-row items-end">
                <Text className="text-2xl font-bold text-dark mr-2">{value}</Text>
                {sub && <Text className={`text-xs font-bold mb-1 ${sub.includes('%') ? 'text-green-500' : 'text-gray-400'}`}>{sub}</Text>}
            </View>
        </View>
    );
}

// Reusing FeedItem and Leaderboard components locally for speed, ideally should be shared

function FeedItem({ post, onLike }: any) {
    return (
        <View className="mb-6 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <View className="flex-row justify-between mb-3">
                <View className="flex-row items-center">
                    <Image source={{ uri: post.avatar }} className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
                    <View>
                        <Text className="text-dark font-bold">{post.name}</Text>
                        <Text className="text-gray-400 text-xs">{post.time}</Text>
                    </View>
                </View>
                <Ionicons name="ellipsis-horizontal" size={20} color="#A0AEC0" />
            </View>
            <Text className="text-gray-800 leading-6 mb-4">{post.content}</Text>
            <View className="flex-row space-x-6 border-t border-gray-50 pt-3">
                <TouchableOpacity onPress={onLike} className="flex-row items-center">
                    <Ionicons
                        name={post.isLiked ? "heart" : "heart-outline"}
                        size={20}
                        color={post.isLiked ? "#EF4444" : "#718096"}
                        className="mr-1"
                    />
                    <Text className="text-gray-500 text-sm ml-1">{post.likes}</Text>
                </TouchableOpacity>
                <View className="flex-row items-center">
                    <Ionicons name="chatbubble-outline" size={19} color="#718096" className="mr-1" />
                    <Text className="text-gray-500 text-sm ml-1">{post.comments}</Text>
                </View>
            </View>

            {/* Mock completion badge for specific posts */}
            {post.name === 'Sarah, Mike & 3 others' && (
                <View className="mt-3 bg-green-50 p-3 rounded-xl flex-row items-center">
                    <Ionicons name="checkmark-circle" size={20} color="#0F9D88" className="mr-2" />
                    <Text className="text-dark font-bold text-sm">Completed Today's Commitment.</Text>
                </View>
            )}
        </View>
    );
}

function LeaderboardView() {
    const leaders = [
        { rank: 1, name: "Jessica K.", score: "2,450 pts", avatar: "https://i.pravatar.cc/150?img=9", change: "up" },
        { rank: 2, name: "Mike T.", score: "2,320 pts", avatar: "https://i.pravatar.cc/150?img=3", change: "down" },
        { rank: 3, name: "Sarah M.", score: "2,100 pts", avatar: "https://i.pravatar.cc/150?img=5", change: "same" },
        { rank: 4, name: "Alex Fitness", score: "1,950 pts", avatar: "https://i.pravatar.cc/150?img=11", change: "up", isMe: true },
        { rank: 5, name: "David L.", score: "1,800 pts", avatar: "https://i.pravatar.cc/150?img=12", change: "down" },
    ];

    return (
        <View>
            {leaders.map((leader) => (
                <View key={leader.rank} className={`flex-row items-center p-4 mb-3 rounded-xl border ${leader.isMe ? 'bg-primary-light border-primary/20' : 'bg-white border-gray-100'}`}>
                    <View className="w-8 items-center mr-2">
                        {leader.rank === 1 && <Ionicons name="trophy" size={24} color="#F6E05E" />}
                        {leader.rank === 2 && <Ionicons name="trophy" size={24} color="#A0AEC0" />}
                        {leader.rank === 3 && <Ionicons name="trophy" size={24} color="#F6AD55" />}
                        {leader.rank > 3 && <Text className="text-gray-500 font-bold text-lg">{leader.rank}</Text>}
                    </View>

                    <Image source={{ uri: leader.avatar }} className="w-10 h-10 rounded-full bg-gray-200 mr-3" />

                    <View className="flex-1">
                        <Text className={`font-bold ${leader.isMe ? 'text-primary-dark' : 'text-dark'}`}>{leader.name}</Text>
                        <Text className="text-gray-400 text-xs">{leader.score}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}
