import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { useAuthStore } from '../../store/useAuthStore';

export default function LoginScreen() {
    const router = useRouter();
    const { login } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Mock login
        login('Alex Johnson', email || 'alex@example.com');
        router.replace('/(tabs)/home');
    };

    return (
        <SafeAreaView className="flex-1 bg-white px-6 pt-4">
            <TouchableOpacity onPress={() => router.back()} className="mb-8">
                <Ionicons name="arrow-back" size={24} color="#1A202C" />
            </TouchableOpacity>

            <Text className="text-3xl font-bold text-dark mb-2">Welcome Back</Text>
            <Text className="text-gray-500 mb-8">Sign in to continue your streak.</Text>

            <View className="space-y-4">
                <View>
                    <Text className="text-dark font-bold mb-2">Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        className="bg-gray-50 p-4 rounded-xl border border-gray-100"
                        autoCapitalize="none"
                    />
                </View>
                <View className="mb-6">
                    <Text className="text-dark font-bold mb-2">Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        secureTextEntry
                        className="bg-gray-50 p-4 rounded-xl border border-gray-100"
                    />
                </View>

                <Button title="Sign In" onPress={handleLogin} />
            </View>
        </SafeAreaView>
    );
}
