import { IconSymbol } from "@/components/ui/IconSymbol";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

const dummyEpisodes = [
  { title: "Episode 1: Awal Pertarungan", date: "1 Jan 2025" },
  { title: "Episode 2: Lawan Misterius", date: "3 Jan 2025" },
  { title: "Episode 3: Serangan Balik", date: "5 Jan 2025" },
  { title: "Episode 4: Sekolah VS Geng", date: "7 Jan 2025" },
  { title: "Episode 5: Rencana Rahasia", date: "9 Jan 2025" },
];

export default function DetailScreen() {
  const { title, reads, image } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <StatusBar barStyle="dark-content" />

      <TouchableOpacity className="mb-4" onPress={() => router.back()}>
        <IconSymbol name="arrow.left.circle.fill" size={30} color="black" />
      </TouchableOpacity>

      <View className="items-center mb-4">
        <Image
          source={{ uri: Array.isArray(image) ? image[0] : image }}
          className="w-40 h-60 rounded-lg mb-2"
        />
        <Text className="text-xl font-bold">{title}</Text>
        <Text className="text-sm text-gray-500">{reads}</Text>
      </View>

      <Text className="text-lg font-bold mb-2">Daftar Episode</Text>

      {dummyEpisodes.map((episode, index) => (
        <TouchableOpacity
          key={index}
          className="flex-row justify-between items-center border-b border-gray-200 py-3"
        >
          <View>
            <Text className="font-medium">{episode.title}</Text>
            <Text className="text-xs text-gray-400">{episode.date}</Text>
          </View>
          <Text className="text-blue-500 text-sm">Baca</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
