import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs (Home + Add) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Details screen MUST be declared */}
      <Stack.Screen name="details/index" options={{ title: 'Details' }} />
    </Stack>
  );
}