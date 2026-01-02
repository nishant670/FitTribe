import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../store/useAuthStore';

export default function SignupScreen() {
    const router = useRouter();
    const { login } = useAuthStore(); // Using login for now to simulate auth
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const handleSignup = () => {
        // Mock signup
        login(name || 'New Member', email || 'member@example.com');
        router.replace('/(tabs)/community');
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row items-center px-6 py-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#1A202C" />
                </TouchableOpacity>
                <Text className="text-lg font-bold text-dark ml-4 flex-1 text-center mr-8">Sign Up</Text>
            </View>

            <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                <View className="mb-8 mt-2">
                    <Text className="text-3xl font-bold text-dark mb-2">Create Account</Text>
                    <Text className="text-gray-500 leading-6">Start your consistency streak today. Join the community.</Text>
                </View>

                <View className="space-y-4 mb-6">
                    <View>
                        <Text className="text-dark font-bold mb-2">Email Address</Text>
                        <View className="relative">
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="you@example.com"
                                className="bg-white p-4 rounded-2xl border border-gray-200 pr-12"
                                autoCapitalize="none"
                            />
                            <View className="absolute right-4 top-4">
                                <Ionicons name="mail-outline" size={20} color="#CBD5E0" />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text className="text-dark font-bold mb-2">Password</Text>
                        <View className="relative">
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Min. 8 characters"
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

                    <View>
                        <Text className="text-dark font-bold mb-2">Confirm Password</Text>
                        <View className="relative">
                            <TextInput
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="Re-enter password"
                                secureTextEntry={!showConfirmPassword}
                                className="bg-white p-4 rounded-2xl border border-gray-200 pr-12"
                            />
                            <TouchableOpacity
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-4"
                            >
                                <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#CBD5E0" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity className="flex-row items-start mt-2" onPress={() => setAgreed(!agreed)}>
                        <View className={`w-5 h-5 rounded border mr-3 items-center justify-center ${agreed ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'}`}>
                            {agreed && <Ionicons name="checkmark" size={14} color="white" />}
                        </View>
                        <Text className="text-gray-500 text-sm flex-1">
                            I agree to the <Text className="text-dark font-bold underline">Terms of Service</Text> and <Text className="text-dark font-bold underline">Privacy Policy</Text>.
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={handleSignup}
                    className="bg-green-500 py-4 rounded-2xl items-center shadow-lg shadow-green-200 mb-8"
                >
                    <Text className="text-white font-bold text-lg">Sign Up</Text>
                </TouchableOpacity>

                <View className="flex-row items-center mb-8">
                    <View className="flex-1 h-[1px] bg-gray-100" />
                    <Text className="text-gray-400 mx-4 text-sm">Or continue with</Text>
                    <View className="flex-1 h-[1px] bg-gray-100" />
                </View>

                <View className="flex-row gap-4 mb-8">
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center py-4 border border-gray-200 rounded-2xl bg-white">
                        <Ionicons name="logo-apple" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center py-4 border border-gray-200 rounded-2xl bg-white">
                        <Ionicons name="globe-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-center pb-8">
                    <Text className="text-gray-500">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/auth/login')}>
                        <Text className="text-green-500 font-bold">Log in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
