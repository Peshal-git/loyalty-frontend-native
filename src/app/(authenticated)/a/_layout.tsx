import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AdminLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="members" options={{ headerShown: false }} />
      <Stack.Screen name="admins" options={{ headerShown: false }} />
      <Stack.Screen name="rewards" options={{ headerShown: false }} />
      <Stack.Screen name="tiers" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AdminLayout;
