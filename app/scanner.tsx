import { BarCodeScanner } from "expo-barcode-scanner";
import { Stack, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: { type: string; data: string }) => {
    setScanned(true);

    router.replace({ pathname: "/payments", params: { data } });
  };

  const renderCamera = () => {
    return (
      <View className="w-[80%] aspect-square overflow-hidden mb-[40px] rounded-sm">
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          className="flex-1"
        />
        {scanned && (
          <>
            <Pressable onPress={() => setScanned(false)}>
              <Text>Tap to Scan Again</Text>
            </Pressable>
          </>
        )}
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View className="flex items-center justify-center">
        <Text>Camera permission not granted</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Scanner", headerShown: false }} />
      <View className="h-full w-full p-4 mt-5 flex items-center justify-center">
        <Text className="text-2xl absolute top-0">Scan QR Code</Text>
        {renderCamera()}
      </View>
    </SafeAreaView>
  );
};

export default Scanner;
