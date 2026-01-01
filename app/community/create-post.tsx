import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
                <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text className="text-gray-500 text-base">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handlePost}
                        disabled={!content.trim()}
                        className={`px-4 py-2 rounded-full ${content.trim() ? 'bg-primary' : 'bg-gray-200'}`}
                    >
                        <Text className={`font-bold ${content.trim() ? 'text-white' : 'text-gray-400'}`}>Post</Text>
                    </TouchableOpacity>
                </View>

                {/* Content */}
                <View className="p-6 flex-row">
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                        className="w-10 h-10 rounded-full bg-gray-200 mr-3"
                    />
                    <TextInput
                        className="flex-1 text-lg text-dark leading-6"
                        placeholder="What's on your mind?"
                        multiline
                        autoFocus
                        value={content}
                        onChangeText={setContent}
                        textAlignVertical="top"
                    />
                </View>
            </View>

            {/* Keyboard accessory view could go here */}
        </SafeAreaView>
    );
}
