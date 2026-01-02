import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
          tabBarActiveTintColor: '#0F9D88',
          tabBarInactiveTintColor: '#A0AEC0',
        }}>
        <Tabs.Screen
          name="community"
          options={{
            title: 'Tribe',
            tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="plan"
          options={{
            title: 'Plan',
            tabBarIcon: ({ color }) => <Ionicons name="calendar" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
          }}
        />
        {/* Hide desk screen from tabs but keep file if needed for reference, or just ensure it's not in the list if we want to completely remove access */}
        <Tabs.Screen
          name="desk"
          options={{
            href: null, // This hides it from the tab bar
            title: 'Desk',
            tabBarIcon: ({ color }) => <Ionicons name="desktop" size={24} color={color} />,
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
}
