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
import useAuthStore from "../stores/useAuthStore";
import useOrgStore from "../stores/orgStore";
import { ActivityIndicator, Text, View } from "react-native";

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
  const { isAuthenticated, user } = useAuthStore();

  const { orgInfo, isLoading, error, setOrg } = useOrgStore();

  React.useEffect(() => {
    setOrg();
  }, [setOrg]);

  if (isLoading)
    return (
      <View className="min-h-screen flex items-center justify-center">
        <ActivityIndicator size="large" color="#1e2939" />
      </View>
    );
  if (error)
    return (
      <View className="min-h-screen text-xl flex items-center justify-center">
        <Text>Error: Server is not connected</Text>
      </View>
    );
  if (!orgInfo) return null;

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />

        <Stack>
          <Stack.Protected guard={isAuthenticated && !user?.needsExtraInfo}>
            <Stack.Screen
              name="(authenticated)"
              options={{ headerShown: false }}
            />
          </Stack.Protected>

          <Stack.Protected
            guard={(isAuthenticated && user?.needsExtraInfo) ?? false}
          >
            <Stack.Screen
              name="additional-info"
              options={{ headerShown: false }}
            />
          </Stack.Protected>

          <Stack.Protected guard={!isAuthenticated}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen
              name="forgot-password"
              options={{ headerShown: false }}
            />
          </Stack.Protected>
        </Stack>

        <Toast />
        <PortalHost />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
