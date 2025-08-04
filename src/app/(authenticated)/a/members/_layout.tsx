import { Stack } from "expo-router";

const MembersListLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[memberId]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MembersListLayout;
