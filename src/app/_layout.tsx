import "~/global.css";

import {
  Theme,
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NAV_THEME } from "@/src/lib/constants";
import { useColorScheme } from "@/src/lib/useColorScheme";
import { PortalHost } from "@rn-primitives/portal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export { ErrorBoundary } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen
            name="forgot-password"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <Toast />
        <PortalHost />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
