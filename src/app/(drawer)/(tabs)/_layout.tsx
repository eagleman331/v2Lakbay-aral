import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '@/src/assets/constant/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="(tour)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="campground" size={24} color={Colors.darkGreen} />
          ),
        }}
      />
      <Tabs.Screen
        name="(faqs)"
        options={{
          title: 'FAQs',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="person-military-rifle" size={26} color={Colors.darkGreen} />
          ),
        }}
      />
      <Tabs.Screen name="(commander)" options={{ href: null, headerShown: false }} />
      <Tabs.Screen name="(exercise)" options={{ href: null, headerShown: false }} />
      <Tabs.Screen name="(profile)" options={{ href: null, headerShown: false }} />
      <Tabs.Screen name="(rotc)" options={{ href: null, headerShown: false }} />
    </Tabs>
  );
}
