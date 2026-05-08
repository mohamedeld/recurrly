import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { styled } from "nativewind";
import React, { useEffect } from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const RootLayout = () => {
  const [fontLoaded] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });
  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="(tabs)"
      />
    </SafeAreaView>
  );
};

export default RootLayout;
