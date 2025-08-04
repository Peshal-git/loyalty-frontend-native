import useAuthStore from "@/src/stores/useAuthStore";
import { Stack } from "expo-router";
import React from "react";

const AuthenticatedLayout = () => {
  const { hasRole } = useAuthStore();

  return (
    <Stack>
      <Stack.Protected guard={hasRole("MEMBER")}>
        <Stack.Screen name="(m)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={hasRole("ADMIN")}>
        <Stack.Screen name="a" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
};

export default AuthenticatedLayout;
