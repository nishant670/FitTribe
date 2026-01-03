import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/useAuthStore';

export default function LoginScreen() {
    const router = useRouter();
    const { login } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Mock login
        login('Alex Johnson', email || 'alex@example.com');
        router.replace('/(tabs)/community');
    };

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
            <View className="flex-row items-center px-6 py-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#1A202C" />
                </TouchableOpacity>
                <Text className="text-lg font-bold text-dark ml-4 flex-1 text-center mr-8">Login</Text>
            </View>

            <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                <View className="items-center mb-8 mt-4">
                    <View className="w-16 h-16 bg-green-100 rounded-2xl items-center justify-center mb-4">
                        <Ionicons name="barbell" size={32} color="#10B981" />
                    </View>
                    <Text className="text-3xl font-bold text-dark mb-2">Welcome Back </Text>
                    <Text className="text-gray-500">Let's crush today's goals.</Text>
                </View>

                <View className="space-y-4 mb-2">
                    <View>
                        <Text className="text-dark font-bold mb-2">Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            className="bg-white p-4 rounded-2xl border border-gray-200"
                            autoCapitalize="none"
                        />
                    </View>
                    <View>
                        <Text className="text-dark font-bold mb-2">Password</Text>
                        <View className="relative">
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Enter your password"
                                secureTextEntry={!showPassword}
                                className="bg-white p-4 rounded-2xl border border-gray-200 pr-12"
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4"
                            >
                                <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="#CBD5E0" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity className="items-end mb-6">
                        <Text className="text-green-500 font-bold text-sm">Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleLogin}
                        className="bg-green-500 py-4 rounded-2xl items-center shadow-lg shadow-green-200 mb-6"
                    >
                        <Text className="text-white font-bold text-lg">Log In</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center mb-8">
                    <View className="flex-1 h-[1px] bg-gray-100" />
                    <Text className="text-gray-400 mx-4 text-sm">Or continue with</Text>
                    <View className="flex-1 h-[1px] bg-gray-100" />
                </View>

                <View className="flex-row gap-4 mb-8">
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center py-4 border border-gray-200 rounded-2xl bg-white">
                        <Ionicons name="logo-google" size={20} color="#EA4335" className="mr-2" />
                        <Text className="text-dark font-bold">Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center py-4 border border-gray-200 rounded-2xl bg-white">
                        <Ionicons name="logo-apple" size={20} color="black" className="mr-2" />
                        <Text className="text-dark font-bold">Apple</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-center">
                    <Text className="text-gray-500">New here? </Text>
                    <TouchableOpacity onPress={() => router.push('/auth/signup')}>
                        <Text className="text-dark font-bold">Create an Account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
