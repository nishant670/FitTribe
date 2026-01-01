import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/Card';
import { ProgressBar } from '../../components/ProgressBar';
import { Post, useCommunityStore } from '../../store/useCommunityStore';

const TABS = ['Feed', 'Challenges', 'Leaderboard'];

export default function CommunityScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Feed');

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-1 px-6 pt-4">
                {/* Header */}
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-2xl font-bold text-dark">Tribe</Text>
                    <View className="flex-row space-x-3 gap-3">
                        <TouchableOpacity className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center">
                            <Ionicons name="search" size={20} color="#718096" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/profile')}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                                className="w-10 h-10 rounded-full bg-gray-200"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Tabs */}
                <View className="flex-row mb-6 border-b border-gray-100">
                    {TABS.map(tab => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            className={`pb-3 border-b-2 mr-6 ${activeTab === tab ? 'border-primary' : 'border-transparent'}`}
                        >
                            <Text className={`font-bold ${activeTab === tab ? 'text-primary' : 'text-gray-400'}`}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                    {activeTab === 'Feed' && <FeedView />}
                    {activeTab === 'Challenges' && <ChallengesView />}
                    {activeTab === 'Leaderboard' && <LeaderboardView />}
                    <View className="h-24" />
                </ScrollView>
            </View>

            {/* FAB */}
            {activeTab === 'Feed' && (
                <TouchableOpacity
                    onPress={() => router.push('/community/create-post')}
                    className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-full items-center justify-center shadow-lg elevation-5"
                >
                    <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
}

function FeedView() {
    const { posts, toggleLike } = useCommunityStore();

    return (
        <>
            {/* Challenge Banner */}
            <LinearGradient
                colors={['#8B5CF6', '#7C3AED']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="rounded-2xl p-6 mb-8 shadow-sm relative overflow-hidden"
            >
                <View className="flex-row justify-between mb-4">
                    <View className="bg-white/20 px-2 py-1 rounded text-xs"><Text className="text-white text-[10px] font-bold uppercase">Monthly Challenge</Text></View>
                    <Text className="text-white/80 text-xs">Ends in 12d</Text>
                </View>

                <Text className="text-xl font-bold text-white mb-2">30-Day Plank Master</Text>
                <Text className="text-white/80 text-sm mb-6 w-3/4">Join 1,240 others in building core strength.</Text>

                <View className="flex-row justify-between items-center">
                    <View className="flex-row pl-2">
                        {[1, 2, 3].map((_, i) => (
                            <View key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-primary -ml-2" />
                        ))}
                    </View>
                    <TouchableOpacity className="bg-white px-4 py-2 rounded-lg">
                        <Text className="text-primary font-bold text-sm">Join Now</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            {/* Feed Items */}
            {posts.map(post => (
                <FeedItem key={post.id} post={post} onLike={() => toggleLike(post.id)} />
            ))}
        </>
    );
}

function FeedItem({ post, onLike }: { post: Post, onLike: () => void }) {
    return (
        <View className="mb-6 border-b border-gray-50 pb-6">
            <View className="flex-row items-center mb-3">
                <Image source={{ uri: post.avatar }} className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
                <View>
                    <Text className="text-dark font-bold">{post.name}</Text>
                    <Text className="text-gray-400 text-xs">{post.time}</Text>
                </View>
            </View>
            <Text className="text-gray-800 leading-6 mb-4">{post.content}</Text>
            <View className="flex-row space-x-6">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={onLike}>
                        <Ionicons
                            name={post.isLiked ? "heart" : "heart-outline"}
                            size={20}
                            color={post.isLiked ? "#EF4444" : "#718096"}
                            className="mr-1"
                        />
                    </TouchableOpacity>
                    <Text className="text-gray-500 text-sm ml-1">{post.likes}</Text>
                </View>
                <View className="flex-row items-center">
                    <Ionicons name="chatbubble-outline" size={19} color="#718096" className="mr-1" />
                    <Text className="text-gray-500 text-sm ml-1">{post.comments}</Text>
                </View>
            </View>
        </View>
    );
}

function ChallengesView() {
    return (
        <View>
            <Text className="text-lg font-bold text-dark mb-4">Active Challenges</Text>
            <ChallengeCard
                title="30-Day Plank Master"
                joined={true}
                participants="1.2k"
                daysLeft="12 days"
                progress={0.4}
                image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400"
            />

            <Text className="text-lg font-bold text-dark mb-4 mt-4">Discover</Text>
            <ChallengeCard
                title="Summer Shred"
                joined={false}
                participants="850"
                daysLeft="Starts in 3d"
                image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
            />
            <ChallengeCard
                title="Morning Yoga"
                joined={false}
                participants="2.4k"
                daysLeft="Ongoing"
                image="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=400"
            />
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
            <View className="bg-primary-light p-4 rounded-xl mb-6 flex-row items-center justify-between">
                <View>
                    <Text className="text-primary-dark font-bold text-lg">Your Rank</Text>
                    <Text className="text-primary text-sm">Top 15% of your tribe</Text>
                </View>
                <View className="items-end">
                    <Text className="text-3xl font-bold text-primary-dark">#4</Text>
                </View>
            </View>

            <Text className="text-lg font-bold text-dark mb-4">Top Movers</Text>
            {leaders.map((leader) => (
                <LeaderboardItem key={leader.rank} item={leader} />
            ))}
        </View>
    );
}


function ChallengeCard({ title, joined, participants, daysLeft, progress, image }: any) {
    return (
        <Card className="mb-4 p-0 overflow-hidden">
            <View className="h-32 bg-gray-200 w-full relative">
                <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
                <View className="absolute top-3 right-3 bg-black/50 px-2 py-1 rounded">
                    <Text className="text-white text-xs font-bold">{daysLeft}</Text>
                </View>
            </View>
            <View className="p-4">
                <View className="flex-row justify-between items-start mb-2">
                    <Text className="text-lg font-bold text-dark flex-1 mr-2">{title}</Text>
                    {joined ? (
                        <View className="bg-green-100 px-2 py-1 rounded"><Text className="text-green-700 text-xs font-bold">JOINED</Text></View>
                    ) : (
                        <TouchableOpacity className="bg-primary px-3 py-1 rounded-lg">
                            <Text className="text-white text-xs font-bold">JOIN</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <Text className="text-gray-500 text-sm mb-3">{participants} participants</Text>

                {joined && progress && (
                    <View>
                        <View className="flex-row justify-between mb-1">
                            <Text className="text-xs text-gray-400 font-bold">PROGRESS</Text>
                            <Text className="text-xs text-primary font-bold">{Math.round(progress * 100)}%</Text>
                        </View>
                        <ProgressBar progress={progress} className="h-1.5" />
                    </View>
                )}
            </View>
        </Card>
    );
}

function LeaderboardItem({ item }: any) {
    const isTop3 = item.rank <= 3;

    return (
        <View className={`flex-row items-center p-4 mb-3 rounded-xl border ${item.isMe ? 'bg-primary-light border-primary/20' : 'bg-white border-gray-100'}`}>
            <View className="w-8 items-center mr-2">
                {item.rank === 1 && <Ionicons name="trophy" size={24} color="#F6E05E" />}
                {item.rank === 2 && <Ionicons name="trophy" size={24} color="#A0AEC0" />}
                {item.rank === 3 && <Ionicons name="trophy" size={24} color="#F6AD55" />}
                {item.rank > 3 && <Text className="text-gray-500 font-bold text-lg">{item.rank}</Text>}
            </View>

            <Image source={{ uri: item.avatar }} className="w-10 h-10 rounded-full bg-gray-200 mr-3" />

            <View className="flex-1">
                <Text className={`font-bold ${item.isMe ? 'text-primary-dark' : 'text-dark'}`}>{item.name}</Text>
                <Text className="text-gray-400 text-xs">{item.score}</Text>
            </View>

            <View>
                {item.change === 'up' && <Ionicons name="caret-up" size={16} color="#48BB78" />}
                {item.change === 'down' && <Ionicons name="caret-down" size={16} color="#F56565" />}
                {item.change === 'same' && <Ionicons name="remove" size={16} color="#A0AEC0" />}
            </View>
        </View>
    );
}
