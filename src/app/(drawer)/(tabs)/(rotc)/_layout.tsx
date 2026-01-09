import { Stack } from 'expo-router';

export default function MapLayout() {
  return (
    <Stack>
        <Stack.Screen name="RotcSchoolScreen" options={{ headerShown: false }} />
     <Stack.Screen name="RotcDetailScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
