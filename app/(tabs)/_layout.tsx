import { Tabs } from 'expo-router';
import React, { useRef } from 'react';
import { Animated, Platform, Pressable } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={"#4A9782"} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Cari',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="search.fill" color={"#4A9782"} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Favorit',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="heart.fill" color={"#4A9782"} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={"#4A9782"} />,
        }}
      />
      
    </Tabs>
  );
}

function AnimatedTabButton({ children, ...props }: any) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      {...props}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
}
