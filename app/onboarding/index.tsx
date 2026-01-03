import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/useAuthStore';

// Step 1: Interests
const INTERESTS = [
    { id: 'weightlifting', name: 'Lifting', icon: 'barbell-outline' }, // Shortened name
    { id: 'running', name: 'Running', icon: 'walk-outline' },
    { id: 'yoga', name: 'Yoga', icon: 'body-outline' },
    { id: 'mobility', name: 'Mobility', icon: 'accessibility-outline' },
    { id: 'hit', name: 'HIIT', icon: 'stopwatch-outline' }, // Shortened name
    { id: 'walking', name: 'Walking', icon: 'footsteps-outline' },
    { id: 'sports', name: 'Sports', icon: 'basketball-outline' },

    // { id: 'desk', name: 'Desk', icon: 'desktop-outline' }, // Shortened name
];

export default function OnboardingScreen() {
    const router = useRouter();
    const { completeOnboarding, loginAsGuest } = useAuthStore();
    const [step, setStep] = useState(1);

    // State
    const [selectedInterests, setSelectedInterests] = useState<string[]>(['walking']);
    const [isDeskJob, setIsDeskJob] = useState(true);
    const [location, setLocation] = useState('');
    const [dailyReminder, setDailyReminder] = useState(true);
    const [movementReminder, setMovementReminder] = useState(false);

    const handleNext = () => {
        if (step < 5) {
            setStep(step + 1);
        } else {
            handleFinish();
        }
    };

    const handleFinish = () => {
        loginAsGuest();
        completeOnboarding();
        router.replace('/(tabs)/community');
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            router.back();
        }
    };

    const toggleInterest = (id: string) => {
        if (selectedInterests.includes(id)) {
            setSelectedInterests(selectedInterests.filter(i => i !== id));
        } else {
            setSelectedInterests([...selectedInterests, id]);
        }
    };

    const renderHeader = () => (
        <View className="flex-row justify-between items-center px-6 py-2 pb-2 bg-white z-10">
            <View className="w-10">
                {step > 1 && (
                    <TouchableOpacity onPress={handleBack} className="p-2 -ml-2">
                        <Ionicons name="arrow-back" size={24} color="#1A202C" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Step Indicator */}
            {step < 5 ? (
                <View className="flex-row items-center space-x-3">
                    <View className={`h-1.5 rounded-full ${step >= 1 ? 'w-6 bg-green-500' : 'w-2 bg-gray-200'}`} />
                    <View className={`h-1.5 rounded-full ${step >= 2 ? 'w-6 bg-green-500' : 'w-2 bg-gray-200'}`} />
                    <View className={`h-1.5 rounded-full ${step >= 3 ? 'w-6 bg-green-500' : 'w-2 bg-gray-200'}`} />
                    {step === 3 && <Text className="ml-2 text-gray-400 text-[10px] font-bold">Step 3/4</Text>}
                </View>
            ) : (
                <View className="flex-row items-center space-x-1">
                    <Text className="text-gray-400 text-xs font-bold">Step 4 of 4</Text>
                </View>
            )}

            <TouchableOpacity onPress={handleFinish} className="p-2 -mr-2 w-12 items-end">
                <Text className="text-gray-400 font-bold text-xs">Skip</Text>
            </TouchableOpacity>
        </View>
    );

    // Step 1: Interests
    const renderStep1 = () => (
        <View className="flex-1">
            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                <Text className="text-3xl font-bold text-dark mb-2 mt-2">What are you <Text className="text-green-500">into?</Text></Text>
                <Text className="text-gray-500 mb-6">Pick a few. We'll suggest tribes you'll enjoy.</Text>

                <View className="flex-row flex-wrap justify-between">
                    {INTERESTS.map((item) => {
                        const isSelected = selectedInterests.includes(item.id);
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => toggleInterest(item.id)}
                                className={`w-[31%] aspect-square rounded-2xl mb-3 items-center justify-center border relative ${isSelected ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-transparent'}`}
                            >
                                {isSelected && (
                                    <View className="absolute top-2 right-2 bg-green-500 w-4 h-4 rounded-full items-center justify-center">
                                        <Ionicons name="checkmark" size={10} color="white" />
                                    </View>
                                )}
                                <View className={`w-10 h-10 rounded-full items-center justify-center mb-2 ${isSelected ? 'bg-green-100' : 'bg-white'}`}>
                                    <Ionicons name={item.icon as any} size={20} color={isSelected ? '#10B981' : '#4A5568'} />
                                </View>
                                <Text className={`font-bold text-xs ${isSelected ? 'text-green-700' : 'text-gray-500'}`}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>

            <View className="p-6 pb-2">
                <TouchableOpacity
                    onPress={handleNext}
                    className="bg-green-500 py-4 rounded-full items-center shadow-lg shadow-green-200"
                >
                    <Text className="text-white font-bold text-lg">Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Step 2: Context
    const renderStep2 = () => (
        <View className="flex-1">
            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                <Text className="text-3xl font-bold text-dark mb-2 mt-2">Let's get to know you.</Text>
                <Text className="text-gray-500 mb-8">This helps us find tribes with similar lifestyles.</Text>

                <Text className="text-dark font-bold mb-4">Do you work a desk job?</Text>
                <View className="flex-row justify-between mb-8">
                    <TouchableOpacity
                        onPress={() => setIsDeskJob(true)}
                        className={`w-[48%] py-6 rounded-2xl border-2 items-center ${isDeskJob ? 'bg-green-50 border-green-500' : 'bg-white border-gray-200'}`}
                    >
                        {isDeskJob && <View className="absolute top-3 left-3 w-4 h-4 rounded-full border border-green-500 flex items-center justify-center"><View className="w-2 h-2 bg-green-500 rounded-full" /></View>}
                        <Ionicons name="desktop-outline" size={32} color={isDeskJob ? '#10B981' : '#4A5568'} />
                        <Text className={`font-bold mt-2 ${isDeskJob ? 'text-green-700' : 'text-gray-500'}`}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setIsDeskJob(false)}
                        className={`w-[48%] py-6 rounded-2xl border-2 items-center ${!isDeskJob ? 'bg-green-50 border-green-500' : 'bg-white border-gray-200'}`}
                    >
                        {!isDeskJob && <View className="absolute top-3 left-3 w-4 h-4 rounded-full border border-green-500 flex items-center justify-center"><View className="w-2 h-2 bg-green-500 rounded-full" /></View>}
                        <Ionicons name="walk-outline" size={32} color={!isDeskJob ? '#10B981' : '#4A5568'} />
                        <Text className={`font-bold mt-2 ${!isDeskJob ? 'text-green-700' : 'text-gray-500'}`}>No</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-dark font-bold mb-4">Where are you based?</Text>
                <View className="flex-row items-center bg-gray-50 p-4 rounded-2xl border border-gray-200 mb-2">
                    <Ionicons name="location-outline" size={20} color="#A0AEC0" className="mr-2" />
                    <TextInput
                        placeholder="Enter your city (Optional)"
                        value={location}
                        onChangeText={setLocation}
                        className="flex-1 text-dark"
                    />
                    <View className="bg-green-100 px-2 py-1 rounded">
                        <Text className="text-green-600 text-[10px] font-bold">OPTIONAL</Text>
                    </View>
                </View>
                <Text className="text-gray-400 text-xs mb-4 ml-1">We use this to find local groups.</Text>
            </ScrollView>

            <View className="p-6 pb-2">
                <TouchableOpacity
                    onPress={handleNext}
                    className="bg-green-500 py-4 rounded-full items-center relative shadow-lg shadow-green-200"
                >
                    <Text className="text-white font-bold text-lg">Show My Tribes</Text>
                    <View className="absolute right-6 top-0 bottom-0 justify-center">
                        <Ionicons name="arrow-forward" size={20} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Step 3: Recommendations
    const renderStep3 = () => (
        <View className="flex-1">
            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                <Text className="text-3xl font-bold text-dark mb-2 mt-2">Tribes you might like</Text>
                <Text className="text-gray-500 mb-6">Based on your goal to <Text className="font-bold text-dark">run 5k</Text>, here are some communities where you'll belong.</Text>

                {/* Card 1 */}
                <View className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm mb-4">
                    <View className="h-28 bg-gray-200 rounded-2xl mb-3 relative overflow-hidden">
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=400' }} className="w-full h-full" />
                        <View className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full flex-row items-center">
                            <View className="w-2 h-2 rounded-full bg-orange-500 mr-1" />
                            <Text className="text-[10px] font-bold">42 active now</Text>
                        </View>
                    </View>
                    <View className="flex-row justify-between mb-2">
                        <View>
                            <Text className="text-lg font-bold text-dark">The Early Risers</Text>
                            <Text className="text-gray-500 text-xs">Own the morning, win the day.</Text>
                        </View>
                    </View>
                    <View className="bg-orange-50 p-3 rounded-xl flex-row items-center mb-4">
                        <Ionicons name="sunny" size={16} color="#ED8936" className="mr-2" />
                        <View>
                            <Text className="text-orange-600 text-[10px] font-bold uppercase">Today's Commitment</Text>
                            <Text className="text-dark text-xs font-bold">10-minute sun salutation</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-orange-500 py-3 rounded-xl items-center">
                        <Text className="text-white font-bold">Join Tribe +</Text>
                    </TouchableOpacity>
                </View>

                {/* Card 2 - Selected Style */}
                <View className="bg-white rounded-3xl p-4 border-2 border-orange-400 shadow-sm mb-4 relative">
                    <View className="absolute -top-3 left-4 bg-orange-500 px-2 py-1 rounded shadow-sm">
                        <Text className="text-white text-[10px] font-bold">★ BEST MATCH</Text>
                    </View>

                    <View className="h-28 bg-gray-200 rounded-2xl mb-3 relative overflow-hidden mt-3">
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1552674605-4694c0ee70e0?q=80&w=400' }} className="w-full h-full" />
                        <View className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full flex-row items-center">
                            <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                            <Text className="text-[10px] font-bold">105 active now</Text>
                        </View>
                    </View>
                    <View className="flex-row justify-between mb-2">
                        <View>
                            <Text className="text-lg font-bold text-dark">Couch to 5K Crew</Text>
                            <Text className="text-gray-500 text-xs">Slow progress is still progress.</Text>
                        </View>
                    </View>
                    <View className="bg-orange-50 p-3 rounded-xl flex-row items-center mb-4">
                        <Ionicons name="walk" size={16} color="#ED8936" className="mr-2" />
                        <View>
                            <Text className="text-orange-600 text-[10px] font-bold uppercase">Today's Commitment</Text>
                            <Text className="text-dark text-xs font-bold">15-min brisk walk</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleNext} className="bg-white border border-gray-200 py-3 rounded-xl items-center flex-row justify-center">
                        <Ionicons name="checkmark-circle" size={16} color="#ED8936" className="mr-1" />
                        <Text className="text-dark font-bold">Joined</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );

    // Step 4: Success
    const renderStep4 = () => (
        <View className="flex-1">
            <ScrollView className="flex-1 px-6" contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View className="items-center mb-8 relative mt-4">
                    <View className="w-32 h-32 rounded-full border-4 border-green-500 items-center justify-center p-1">
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400' }} className="w-full h-full rounded-full" />
                    </View>
                    <View className="absolute bottom-0 right-0 bg-green-500 border-4 border-white rounded-full p-2">
                        <Ionicons name="checkmark" size={20} color="white" />
                    </View>
                </View>

                <Text className="text-3xl font-bold text-dark text-center mb-1">You've joined the</Text>
                <Text className="text-3xl font-bold text-green-500 text-center mb-6">Desk Workers{'\n'}Mobility Tribe! 🎉</Text>

                <View className="flex-row items-center bg-gray-50 px-4 py-2 rounded-full mb-8 self-center">
                    <View className="flex-row items-center mr-2">
                        {[1, 2].map((_, i) => (
                            <View key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white -ml-2 first:ml-0 overflow-hidden">
                                <Image source={{ uri: `https://i.pravatar.cc/150?img=${i + 15}` }} className="w-full h-full" />
                            </View>
                        ))}
                    </View>
                    <Text className="text-gray-500 text-xs text-center font-bold">18 members showed up today</Text>
                </View>

                {/* Card Preview */}
                <View className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden relative mb-4">
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400' }} className="w-full h-full opacity-60" />
                    <View className="absolute bottom-4 left-4">
                        <Text className="text-green-500 text-[10px] font-bold uppercase mb-1">Commitment Unlocked</Text>
                        <Text className="text-white font-bold text-lg leading-6">Your first tribe commitment{'\n'}unlocks tomorrow.</Text>
                    </View>
                </View>
            </ScrollView>

            <View className="p-6 pb-2">
                <TouchableOpacity
                    onPress={handleNext}
                    className="w-full bg-green-500 py-4 rounded-full items-center mb-4 shadow-lg shadow-green-200"
                >
                    <Text className="text-white font-bold text-lg">Go to My Tribe →</Text>
                </TouchableOpacity>
                <TouchableOpacity className="items-center mb-2"><Text className="text-gray-500 font-bold text-sm">Explore more tribes</Text></TouchableOpacity>
            </View>
        </View>
    );

    // Step 5: Reminders
    const renderStep5 = () => (
        <View className="flex-1">
            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                <View className="h-60 w-full rounded-2xl mb-8 overflow-hidden bg-gray-100 mt-2">
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400' }} className="w-full h-full" resizeMode="cover" />
                </View>

                <Text className="text-2xl font-bold text-dark mb-2">Want reminders from your tribe?</Text>
                <Text className="text-gray-500 mb-8 leading-5">Get notified when your tribe shows up. Motivation is better together.</Text>

                <View className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 flex-row justify-between items-center shadow-sm">
                    <View className="flex-row items-center flex-1">
                        <View className="w-10 h-10 rounded-full bg-green-50 items-center justify-center mr-3">
                            <Ionicons name="flag" size={20} color="#10B981" />
                        </View>
                        <View>
                            <Text className="text-dark font-bold">Tribe Daily...</Text>
                            <Text className="text-gray-400 text-xs">See when your tribe hits their daily goals.</Text>
                        </View>
                    </View>
                    <Switch
                        trackColor={{ false: '#E2E8F0', true: '#10B981' }}
                        thumbColor={'white'}
                        value={dailyReminder}
                        onValueChange={setDailyReminder}
                    />
                </View>

                <View className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 flex-row justify-between items-center shadow-sm">
                    <View className="flex-row items-center flex-1">
                        <View className="w-10 h-10 rounded-full bg-green-50 items-center justify-center mr-3">
                            <Ionicons name="notifications" size={20} color="#10B981" />
                        </View>
                        <View>
                            <Text className="text-dark font-bold">Tribe Movement</Text>
                            <Text className="text-gray-400 text-xs">Nudges to join group workouts live.</Text>
                        </View>
                    </View>
                    <Switch
                        trackColor={{ false: '#E2E8F0', true: '#10B981' }}
                        thumbColor={'white'}
                        value={movementReminder}
                        onValueChange={setMovementReminder}
                    />
                </View>
            </ScrollView>

            <View className="p-6 pb-2">
                <TouchableOpacity
                    onPress={handleFinish}
                    className="bg-green-500 py-4 rounded-full items-center shadow-lg shadow-green-200"
                >
                    <Text className="text-white font-bold text-lg">Finish Setup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
            {renderHeader()}
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}
            {step === 5 && renderStep5()}
        </SafeAreaView>
    );
}
