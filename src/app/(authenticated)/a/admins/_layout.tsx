import { Stack } from "expo-router";

const AdminsListLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AdminsListLayout;
