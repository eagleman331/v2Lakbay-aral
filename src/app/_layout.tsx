





// import '../../global.css';

// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import Purchases from 'react-native-purchases';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { useEffect } from 'react';

// export default function Layout() {
//   return <Stack />;
// }


import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(drawer)',
};

export default function RootLayout() {
  // const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
</GestureHandlerRootView>
  );
}