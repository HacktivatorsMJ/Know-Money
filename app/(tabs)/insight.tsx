import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Insight = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Insight", headerShown: false }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-black">
          Insight
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Insight;
