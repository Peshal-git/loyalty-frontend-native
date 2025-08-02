import { Link } from "expo-router";
import { Eye } from "@/src/lib/icons/Eye";
import { EyeClosed } from "@/src/lib/icons/EyeOff";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PhoneInput } from "@/src/components/ui/phone-input";
import DobDatePicker from "@/src/components/ui/dob-date-picker";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/src/schemas/signup.schema";
import useOrgStore from "@/src/stores/orgStore";
import { Checkbox } from "@/src/components/ui/checkbox";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { orgInfo } = useOrgStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      dob: "",
      privacyPolicy: false,
      marketingConsent: false,
      referredBy: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          <Text className="text-2xl text-left font-bold">Sign up</Text>
          <View>
            <View className="mt-2 flex flex-row">
              <Text className="text-left text-md">Already a member? </Text>
              <Link href="/" replace className="underline underline-offset-4">
                Sign in
              </Link>
            </View>
          </View>

          <View className="flex gap-4 mt-10">
            <Controller
              control={control}
              name="firstname"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text className="font-semibold text-lg">Firstname*</Text>
                  <TextInput
                    className="h-14 rounded-lg border mt-2 border-[#cfc6c6] px-4"
                    placeholder="Enter your firstname"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                  {errors.firstname && (
                    <Text className="text-red-500">
                      {errors.firstname.message}
                    </Text>
                  )}
                </View>
              )}
            />

            <Controller
              control={control}
              name="lastname"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text className="font-semibold text-lg">Lastname*</Text>
                  <TextInput
                    className="h-14 rounded-lg border mt-2 border-[#cfc6c6] px-4"
                    placeholder="Enter your lastname"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                  {errors.lastname && (
                    <Text className="text-red-500">
                      {errors.lastname.message}
                    </Text>
                  )}
                </View>
              )}
            />
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
              name="phone"
              render={({ field: { onChange, value } }) => (
                <View>
                  <Text className="font-semibold text-lg">Phone*</Text>
                  <PhoneInput
                    defaultCountry="TH"
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.phone && (
                    <Text className="text-red-500">{errors.phone.message}</Text>
                  )}
                </View>
              )}
            />
            <Controller
              control={control}
              name="dob"
              render={({ field }) => (
                <View>
                  <Text className="font-semibold text-lg">Date of Birth*</Text>
                  <DobDatePicker field={field} />
                  {errors.dob && (
                    <Text className="text-red-500">{errors.dob.message}</Text>
                  )}
                </View>
              )}
            />

            <Controller
              control={control}
              name="referredBy"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text className="font-semibold text-lg">Referrer</Text>
                  <TextInput
                    className="h-14 rounded-lg border mt-2 border-[#cfc6c6] px-4"
                    placeholder="Email(Optional)"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                  {errors.firstname && (
                    <Text className="text-red-500">
                      {errors.firstname.message}
                    </Text>
                  )}
                </View>
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text className="font-semibold text-lg">Password*</Text>
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
                      {showPassword ? (
                        <EyeClosed size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
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

            <Controller
              control={control}
              name="privacyPolicy"
              render={({ field: { onChange, value } }) => (
                <View className="mt-4 flex flex-row items-center gap-3">
                  <View>
                    <Checkbox checked={value} onCheckedChange={onChange} />
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-md">
                      I agree to the Privacy Policy*
                    </Text>
                    {errors.privacyPolicy && (
                      <Text className="text-red-500 text-sm">
                        {errors.privacyPolicy.message}
                      </Text>
                    )}
                  </View>
                </View>
              )}
            />
            <Controller
              control={control}
              name="marketingConsent"
              render={({ field: { onChange, value } }) => (
                <View className="mb-4 flex flex-row items-center gap-3">
                  <View>
                    <Checkbox checked={value} onCheckedChange={onChange} />
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-md">
                      I agree to receive marketing communications
                    </Text>
                    {errors.marketingConsent && (
                      <Text className="text-red-500 text-sm">
                        {errors.marketingConsent.message}
                      </Text>
                    )}
                  </View>
                </View>
              )}
            />

            <View>
              <Pressable
                className="bg-gray-800 h-14 flex justify-center rounded-lg"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              >
                <Text className="text-center font-semibold text-lg text-white">
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </Text>
              </Pressable>
            </View>

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

        {Object.keys(errors).length > 0 && (
          <Text className="text-red-500">
            {JSON.stringify(errors, null, 2)}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
