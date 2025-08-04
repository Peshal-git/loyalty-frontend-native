import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
  PermissionsAndroid,
  Platform,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { SvgXml } from "react-native-svg";
import { captureRef } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import Icon from "@expo/vector-icons/Feather";
import * as Progress from "react-native-progress";
import Toast from "react-native-toast-message";
import { client } from "@/src/api/client";

export default function Home() {
  const cardRef = useRef<any>(null);

  const {
    data: rewards,
    isLoading: isRewardsLoading,
    error: rewardsError,
  } = useQuery({
    queryKey: ["rewards"],
    queryFn: async () => {
      const response = await client.getRewards();
      return response.data?.data;
    },
  });

  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await client.getProfile();
      return response.data?.data;
    },
  });

  // Calculate progress to next tier
  const percentageCompleted = profile
    ? Number(
        (
          (((profile?.basePointsDifference ?? 1) -
            (profile?.pointsToNextTier ?? 1)) /
            (profile?.basePointsDifference ?? 1)) *
          100
        ).toFixed(2)
      )
    : 0;

  // Handle PNG download (save to gallery)
  const handlePngDownload = async (memberId: string) => {
    try {
      if (!cardRef.current) {
        throw new Error("Card reference not found");
      }

      // Request storage permissions on Android
      if (Platform.OS === "android") {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage Permission",
            message:
              "This app needs access to storage to save your membership card.",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          }
        );
        if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
          Toast.show({
            type: "error",
            text1: "Storage permission denied",
            text2: "Cannot save the card without permission.",
          });
          return;
        }
      }

      // Request media library permissions (for iOS and Android 13+)
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "error",
          text1: "Media library permission denied",
          text2: "Cannot save the card to gallery without permission.",
        });
        return;
      }

      // Capture the SVG as PNG
      const uri = await captureRef(cardRef, {
        format: "png",
        quality: 1.0,
      });

      // Define the file name and path
      const fileName = `MembershipCard_${memberId}_${Date.now()}.png`;
      const fileUri = `${FileSystem.cacheDirectory}${fileName}`;

      // Move the captured image to cache
      await FileSystem.moveAsync({
        from: uri,
        to: fileUri,
      });

      // Save to gallery using expo-media-library
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      const album = await MediaLibrary.getAlbumAsync("MembershipCards");
      if (album) {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      } else {
        await MediaLibrary.createAlbumAsync("MembershipCards", asset, false);
      }

      Toast.show({
        type: "success",
        text1: "Card saved to gallery!",
        text2: `Saved as ${fileName}`,
      });
    } catch (err) {
      console.error("Error saving PNG:", err);
      Toast.show({
        type: "error",
        text1: "Error saving card",
      });
    }
  };
  // Google Wallet mutation
  const addToGoogleWalletMutation = useMutation({
    mutationFn: async () => {
      const response = await client.createGoogleWalletPass();
      return response.data?.data;
    },
    onSuccess: async (saveUrl) => {
      Toast.show({
        type: "success",
        text1: "Google Wallet pass created!",
      });
      // Assuming data contains the save URL (e.g., data.saveUrl)
      if (saveUrl) {
        try {
          const supported = await Linking.canOpenURL(saveUrl);
          if (supported) {
            await Linking.openURL(saveUrl);
          } else {
            // Redirect to Google Wallet app on Google Play Store
            await Linking.openURL(
              "market://details?id=com.google.android.apps.walletnfcrel"
            );
          }
        } catch (err) {
          console.error("Error opening Google Wallet URL:", err);
          Toast.show({
            type: "error",
            text1: "Failed to open Google Wallet",
          });
        }
      } else {
        Toast.show({
          type: "error",
          text1: "No save URL provided",
        });
      }
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Failed to add to Google Wallet",
      });
    },
  });

  if (isRewardsLoading || isProfileLoading) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#1e2939" />
        </View>
      </SafeAreaView>
    );
  }

  if (rewardsError || profileError) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg text-red-500">Error loading data</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View className="flex-row items-center mb-4 sm:hidden">
          <Icon name="user" size={40} color="#000" />
          <View className="ml-4">
            <Text className="text-sm text-gray-500">Welcome,</Text>
            <Text className="text-lg font-semibold">{profile?.name}</Text>
          </View>
        </View>

        <View className="flex-col rounded-2xl border border-gray-200 p-4 mb-4 mt-4">
          <View className="flex-row items-center mb-2">
            <Icon name="award" size={40} color="#FFD700" />
            <View className="ml-4">
              <Text className="text-2xl font-bold">
                {profile?.pointsBalance.toLocaleString()}
              </Text>
              <Text className="text-sm text-gray-500">Points Balance</Text>
            </View>
          </View>
          <View className="h-px bg-gray-200 my-4" />
          <View className="flex-row justify-between">
            <View className="bg-gray-100 border border-gray-800 px-2 py-1 rounded">
              <Text className="text-sm text-gray-800">
                {profile?.currentTier}
              </Text>
            </View>
            <View className="bg-gray-100 px-2 py-1 rounded">
              <Text className="text-sm">{profile?.nextTier}</Text>
            </View>
          </View>
          <Progress.Bar
            progress={percentageCompleted / 100}
            width={null}
            color="#1e2939"
            className="my-4"
          />
          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-500">
              Need {(profile?.pointsToNextTier ?? 0).toLocaleString()} more
              points
            </Text>
            <Text className="text-sm text-gray-500">
              {Math.round(percentageCompleted)}% completed
            </Text>
          </View>
          <View className="h-px bg-gray-200 my-4" />
          <View className="flex-row justify-between items-center">
            <Text className="text-md text-gray-500">
              Refer and earn points!
            </Text>
            <TouchableOpacity
              className="border border-gray-300 rounded px-4 py-2"
              onPress={() => shareAsync("https://example.com/refer")}
            >
              <View className="flex-row items-center">
                <Icon name="share" size={20} color="#000" />
                <Text className="ml-2 text-sm">Share</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {profile?.tierSvgContent ? (
          <View className="flex-col items-center mb-4">
            <View className="w-full max-w-md relative">
              <SvgXml
                xml={profile?.tierSvgContent}
                width="100%"
                height={200}
                ref={cardRef}
              />
              <TouchableOpacity
                className="absolute bottom-6 right-6"
                onPress={() => handlePngDownload(profile?.memberId ?? "card")}
              >
                <Icon
                  name="download-cloud"
                  size={24}
                  color="rgba(255,255,255,0.5)"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center items-center gap-4 mt-2">
              <TouchableOpacity
                onPress={() => addToGoogleWalletMutation.mutate()}
              >
                <Image
                  source={require("@/src/assets/images/add-to-google-wallet.png")}
                  style={{ width: 120, height: 40 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("Add to Apple Wallet clicked")}
              >
                <Image
                  source={require("@/src/assets/images/add-to-apple-wallet.png")}
                  style={{ width: 120, height: 35 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="flex-col items-center mb-4">
            <Text className="text-lg">Membership Card not unlocked yet.</Text>
          </View>
        )}

        <View className="flex-col rounded-2xl border border-gray-200 p-4">
          <View className="flex-row items-center mb-2">
            <Icon name="gift" size={24} color="#F87171" />
            <Text className="ml-2 text-lg font-semibold">Redeemables</Text>
          </View>
          {rewards && Object.keys(rewards).length > 0 ? (
            <View className="flex-col">
              {Object.entries(rewards).map(([category, items]) => (
                <View key={category} className="mt-4 mb-4">
                  <Text className="text-md font-semibold underline mb-2">
                    {category}
                  </Text>
                  {items.map((reward, index) => (
                    <View key={reward.name}>
                      <Text className="font-medium">{reward.name}</Text>
                      <Text className="text-sm text-gray-500">
                        {reward.pointsRequired.toLocaleString()} points
                      </Text>
                      {index < items.length - 1 && (
                        <View className="h-px bg-gray-200 my-4" />
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ) : (
            <View className="flex-col items-center py-6">
              <Text className="text-lg font-semibold text-center">
                Sorry! You don't have enough points balance to redeem any
                reward.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {addToGoogleWalletMutation.isPending && (
        <View className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <View className="bg-white p-6 rounded-xl flex-row items-center">
            <ActivityIndicator size="small" color="#0000ff" />
            <Text className="ml-2 text-sm font-medium">
              Creating your Google Wallet pass...
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
