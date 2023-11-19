import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Home", headerShown: false }} />
      <View className="h-full w-full p-4">
        <View>
          <Link asChild href={"scanner"}>
            <Pressable className="bg-blue-500 flex items-center mx-[20px] py-[20px] rounded-md">
              <Text className="text-white">Scanner</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
