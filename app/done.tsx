import { Stack, router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Done = () => {
  const { amount, upiID, payeeName } = useLocalSearchParams();
  const Done = () => {
    router.push({
      pathname: "/home",
      params: { amount, upiID, payeeName },
    });
  };
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Done", headerShown: false }} />
      <View className="h-[100%] w-[100%] flex items-center justify-center">
        <Text>
          Paid {amount} to {payeeName} Successfully
        </Text>

        <Text>{upiID}</Text>
        <Pressable
          className="absolute bottom-0 bg-slate-200 w-[80%] items-center justify-center py-[20px] rounded-xl"
          onPress={Done}
        >
          <Text>Done</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Done;
