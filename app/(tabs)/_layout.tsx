import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
          name="desk"
          options={{
            title: 'Desk',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chair-rolling" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: 'Tribe',
            tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />,
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
}
