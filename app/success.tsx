import { Stack, router, useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Success = () => {
  const { amount, upiID, payeeName } = useLocalSearchParams();
  useEffect(() => {
    // Function to be triggered after some time
    const nextScreen = () => {
      router.replace({
        pathname: "/done",
        params: { amount, upiID, payeeName },
      });
    };

    // Set a timeout for 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(nextScreen, 2500);

    // Cleanup the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Success", headerShown: false }} />
      <View className="h-[100%] w-[100%] flex items-center justify-center">
        <View className="flex items-center justify-center">
          <LottieView
            source={require("../assets/lottie/success.json")}
            autoPlay
            loop={false}
            style={{ height: 400, width: 400 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;
