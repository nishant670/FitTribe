import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/useAuthStore';
import { useCommunityStore } from '../../store/useCommunityStore';

export default function CreatePostScreen() {
    const router = useRouter();
    const { user } = useAuthStore();
    const { addPost } = useCommunityStore();
    const [content, setContent] = useState('');

    const handlePost = () => {
        if (!content.trim()) return;

        addPost(content, { name: user?.name || 'Guest' });
        router.back();
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1">
                {/* Header */}
                <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-50">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="close" size={24} color="#1A202C" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold text-dark">Create Post</Text>
                    <TouchableOpacity
                        onPress={handlePost}
                        disabled={!content.trim()}
                        className={`px-6 py-2 rounded-full ${content.trim() ? 'bg-primary' : 'bg-gray-200'}`}
                    >
                        <Text className={`font-bold ${content.trim() ? 'text-white' : 'text-gray-400'}`}>Post</Text>
                    </TouchableOpacity>
                </View>

                {/* Content */}
                <View className="flex-1 p-6">
                    {/* User Info */}
                    <View className="flex-row items-center mb-6">
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=9' }}
                            className="w-12 h-12 rounded-full bg-gray-200 mr-3 border-2 border-white shadow-sm"
                        />
                        <View className="flex-1">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-dark font-bold text-lg mb-1">{user?.name || "Jane Doe"}</Text>
                                <View className="bg-gray-100 px-3 py-1 rounded-full">
                                    <Text className="text-gray-500 text-xs font-bold">Public</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <TextInput
                        className="flex-1 text-lg text-dark leading-7 text-gray-500"
                        placeholder="How is your consistency streak going today? Share your progress..."
                        placeholderTextColor="#A0AEC0"
                        multiline
                        autoFocus
                        value={content}
                        onChangeText={setContent}
                        textAlignVertical="top"
                    />
                </View>

                {/* Footer Actions */}
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
                    {/* Tags */}
                    <View className="px-6 py-2">
                        <Text className="text-xs font-bold text-gray-400 uppercase mb-3">TAGS</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                            <TouchableOpacity className="flex-row items-center bg-transparent border border-green-300 border-dashed px-3 py-2 rounded-full mr-3">
                                <Ionicons name="add" size={16} color="#48BB78" className="mr-1" />
                                <Text className="text-green-500 font-bold text-sm ml-1">Add Tag</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center bg-primary px-3 py-2 rounded-full mr-3">
                                <Ionicons name="barbell" size={16} color="white" className="mr-1" />
                                <Text className="text-white font-bold text-sm ml-1">#LegDay</Text>
                                <Ionicons name="close" size={12} color="white" className="ml-2" />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center bg-gray-100 px-3 py-2 rounded-full mr-3">
                                <Text className="text-gray-500 font-bold text-sm">#Consistency</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* Toolbar */}
                    <View className="flex-row items-center px-6 py-4 border-t border-gray-100 mt-2">
                        <TouchableOpacity className="mr-6">
                            <Ionicons name="image-outline" size={24} color="#0F9D88" />
                        </TouchableOpacity>
                        <TouchableOpacity className="mr-6">
                            <Ionicons name="camera-outline" size={24} color="#718096" />
                        </TouchableOpacity>
                        <TouchableOpacity className="mr-6">
                            <Ionicons name="location-outline" size={24} color="#718096" />
                        </TouchableOpacity>
                        <TouchableOpacity className="mr-6">
                            <Ionicons name="stats-chart-outline" size={24} color="#718096" />
                        </TouchableOpacity>
                        <View className="flex-1" />
                        <View className="w-6 h-6 rounded-full border-2 border-gray-200 border-t-primary" />
                        <TouchableOpacity className="ml-4">
                            <Ionicons name="settings-outline" size={20} color="#718096" />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}
