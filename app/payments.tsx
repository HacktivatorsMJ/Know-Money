import { Stack, router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Payments = () => {
  const [amount, onAmountChange] = useState("");
  const [message, onMessageChange] = useState("");
  const [upiID, setUpiID] = useState("");
  const [payeeName, setPayeeName] = useState("");

  const { data } = useLocalSearchParams();

  useEffect(() => {
    // Check if data is defined before using match
    if (data) {
      const paValue = data?.match(/pa=([^&]*)/)?.[1];
      //const cleanedPaValue = paValue ? paValue.replace(/%20/g, " ") : null;

      const pnValue = data?.match(/pn=([^&]*)/)?.[1];
      const cleanedPnValue = pnValue ? pnValue.replace(/%20/g, " ") : null;

      console.log("Original pnValue:", pnValue);
      console.log("Cleaned pnValue:", cleanedPnValue);

      // Update state only if matches are found
      if (paValue) {
        setUpiID(paValue);
      }

      if (pnValue) {
        setPayeeName(cleanedPnValue);
      }
    }
  }, [data]);

  const Success = () => {
    router.replace({
      pathname: "/success",
      params: { amount, upiID, payeeName },
    });
  };

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Pay", headerShown: true }} />
      <View className="h-full w-full items-center">
        <View className="bg-slate-200 rounded-md w-[90%]">
          <Text className="text-2xl mx-[20px] mt-[20px]">{payeeName}</Text>
          <Text className="mx-[20px] mt-[10px]">{upiID}</Text>
          <TextInput
            className="bg-slate-200 h-[60px] py-[10px] px-[10px] rounded-md mt-[20px] border border-yellow-600 mx-[20px]"
            placeholder="Amount"
            value={amount}
            onChangeText={onAmountChange}
          ></TextInput>
          <TextInput
            className="bg-slate-200 h-[60px] py-[10px] px-[10px] rounded-md mt-[20px] border border-yellow-600 mx-[20px] mb-[20px]"
            placeholder="Message"
            value={message}
            onChangeText={onMessageChange}
          ></TextInput>
        </View>

        <Pressable
          className="absolute bottom-0 bg-slate-200 w-[80%] items-center justify-center py-[20px] rounded-xl"
          onPress={Success}
        >
          <Text>Pay</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Payments;
