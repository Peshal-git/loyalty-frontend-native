import { Stack } from "expo-router";

const MemberDetailsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MemberDetailsLayout;
