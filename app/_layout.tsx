import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import "../global.css";
import { useAuthStore } from '../store/useAuthStore';

export default function RootLayout() {
  const { isOnboarded, hasViewedWelcome } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // This effect handles the initial navigation logic
    // We can add more complex checks here if needed
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth/choice" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/signup" />
        <Stack.Screen name="onboarding/index" />
        <Stack.Screen name="community/create-post" options={{ presentation: 'modal' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
