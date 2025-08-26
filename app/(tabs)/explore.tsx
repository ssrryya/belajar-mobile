import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>
      <Text className="text-2xl font-bold text-[#4A9782] mb-4">Favorit</Text>
    </View>
  );
}