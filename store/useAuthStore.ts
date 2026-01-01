import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
    user: { name: string; email?: string } | null;
    isGuest: boolean;
    isOnboarded: boolean;
    hasViewedWelcome: boolean;

    login: (name: string, email: string) => void;
    loginAsGuest: () => void;
    logout: () => void;
    completeOnboarding: () => void;
    setHasViewedWelcome: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isGuest: false,
            isOnboarded: false,
            hasViewedWelcome: false,

            login: (name, email) => set({ user: { name, email }, isGuest: false, isOnboarded: true }),
            loginAsGuest: () => set({ isGuest: true, user: { name: 'Guest' }, isOnboarded: true }),
            logout: () => set({ user: null, isGuest: false, isOnboarded: false }),
            completeOnboarding: () => set({ isOnboarded: true }),
            setHasViewedWelcome: () => set({ hasViewedWelcome: true }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
