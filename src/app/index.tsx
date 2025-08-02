import { Link, useRouter } from "expo-router";
import { Eye } from "@/src/lib/icons/Eye";
import { EyeClosed } from "@/src/lib/icons/EyeOff";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useOrgStore from "../stores/orgStore";
import { LoginFormData, loginSchema } from "../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../hooks/use-auth-query";
import { AppError } from "../types/AppError";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { orgInfo } = useOrgStore();

  const router = useRouter();

  const signinUserMutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormData) => {
    try {
      setIsAuthenticating(true);
      await signinUserMutation.mutateAsync(values);

      router.replace("/(tabs)/two");
    } catch (error) {
      const err = error as AxiosError<{ message?: string; error?: string }>;
      let errorMessage = "Failed to sign in. Please try again.";

      if (err.response) {
        errorMessage =
          err.response.data?.message ||
          err.response.data?.error ||
          `Server error: ${err.response.status}`;
      } else if (err.request) {
        errorMessage = "Network error. Please check your connection.";
      } else {
        errorMessage = err.message || errorMessage;
      }

      Toast.show({
        type: "error",
        text1: errorMessage,
      });
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <SafeAreaView>
      <View
        className={`flex items-center justify-center py-8 bg-gray-800 w-full`}
      >
        <Image
          className="h-12"
          source={{
            uri: orgInfo?.logo,
          }}
          width={120}
        />
      </View>
      <View className="py-10 px-4 bg-white w-full">
        <Text className="text-2xl text-left font-bold">Sign in</Text>
        <View>
          <View className="mt-2 flex flex-row">
            <Text className="text-left text-md">Don't have an account? </Text>
            <Link href="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </View>
        </View>

        <View className="flex gap-4 mt-10">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <Text className="font-semibold text-lg">Email*</Text>
                <TextInput
                  className="h-14 rounded-lg border mt-2 border-[#cfc6c6] px-4"
                  placeholder="example@example.com"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text className="text-red-500">{errors.email.message}</Text>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <View className="flex flex-row justify-center">
                  <Text className="font-semibold text-lg">Password*</Text>
                  <Link
                    href="/(tabs)/two"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </View>
                <View className="relative">
                  <TextInput
                    className="h-14 rounded-lg border mt-2 border-[#cfc6c6] px-4"
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                  <Pressable
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                  </Pressable>
                </View>
                {errors.password && (
                  <Text className="text-red-500">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            )}
          />

          <View>
            <Pressable
              className="bg-gray-800 h-14 flex justify-center rounded-lg disabled:opacity-50"
              onPress={handleSubmit(onSubmit)}
              disabled={isAuthenticating}
            >
              <Text className="text-center font-semibold text-lg text-white">
                {signinUserMutation.isPending ? "Signing in..." : "Sign in"}
              </Text>
            </Pressable>
          </View>

          <View className="flex-row items-center justify-center my-6">
            <View className="flex-1 h-px bg-[#cfc6c6]" />

            <Text className="mx-4 text-sm text-muted-foreground bg-background px-2">
              Or continue with
            </Text>

            <View className="flex-1 h-px bg-[#cfc6c6]" />
          </View>
          <View className="flex gap-4">
            <Pressable className="border border-[#cfc6c6] h-14 flex flex-row gap-4 items-center justify-center rounded-lg">
              <Image
                source={require("~/src/assets/images/google.png")}
                className="h-6 w-6"
              />
              <Text className="text-center font-semibold text-lg">
                Login with Google
              </Text>
            </Pressable>

            <Pressable className="border border-[#cfc6c6] h-14 flex flex-row gap-4 items-center justify-center rounded-lg">
              <Image
                source={require("~/src/assets/images/line.png")}
                className="h-6 w-6"
              />
              <Text className="text-center font-semibold text-lg">
                Login with Line
              </Text>
            </Pressable>
          </View>
          {/*  */}

          <View>
            <View className="mt-3 flex flex-row justify-center">
              <Text className="text-balance text-center text-xs text-[#737373]">
                By clicking continue, you agree to our{" "}
              </Text>
            </View>
            <View className="flex flex-row justify-center mt-1">
              <Link
                href="/+not-found"
                className="text-balance text-center text-xs text-[#737373] underline underline-offset-4"
              >
                Terms of Service
              </Link>
              <Text className="text-balance text-center text-xs text-[#737373]">
                {" "}
                and{" "}
              </Text>
              <Link
                href="/+not-found"
                className="text-balance text-center text-xs text-[#737373] underline underline-offset-4"
              >
                Privacy Policy.
              </Link>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
