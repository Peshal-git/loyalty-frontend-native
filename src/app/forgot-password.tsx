import { Image, Pressable, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Test = () => {
  return (
    <SafeAreaView>
      <View
        className={`flex items-center justify-center py-8 bg-gray-800 w-full`}
      >
        <Image
          className="h-12"
          source={{
            uri: "https://res.cloudinary.com/ddncdzqwt/image/upload/v1753889094/dosink-logo-light_qrr4uu.png",
          }}
          width={120}
        />
      </View>
      <View className="py-10 px-4 bg-white w-full">
        <Text className="text-2xl text-left font-bold">Forgot Password?</Text>
        <View>
          <View className="mt-2 flex flex-row">
            <Text className="text-left text-md">
              We will send you reset instructions to your email.{" "}
            </Text>
          </View>
        </View>

        <View className="flex gap-4 mt-10">
          <View>
            <View className="flex flex-row justify-center">
              <Text className="font-semibold text-lg">Email</Text>
              <Link
                href="/"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Back to login?
              </Link>
            </View>
            <View className="relative">
              <TextInput className="h-14 rounded-lg border mt-2 border-[#cfc6c6] px-4" />
            </View>
          </View>
          <View>
            <Pressable className="bg-gray-800 h-14 flex justify-center rounded-lg">
              <Text className="text-center font-semibold text-lg text-white">
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Test;
