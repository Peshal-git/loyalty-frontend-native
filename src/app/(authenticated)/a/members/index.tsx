import { Pressable, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLogout } from "@/src/hooks/use-auth-query";
import { useRouter } from "expo-router";

const MemberList = () => {
  const logoutUserMutation = useLogout();

  const router = useRouter();

  const logout = async () => {
    await logoutUserMutation.mutateAsync();
    router.replace("/");
  };

  return (
    <SafeAreaView>
      <Text>Member List</Text>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default MemberList;
