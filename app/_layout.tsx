import "@/global.css";
import { Stack } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const RootLayout = () => {
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
