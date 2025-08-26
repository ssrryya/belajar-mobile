import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, FlatList, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

const dataKomik = [
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg"), status: "ongoing" },
  { title: "Lookism", reads: "221,4JT dibaca", image: require("../assets/images/lookism.jpg"), status: "ongoing" },
  { title: "Study Group", reads: "221,4JT dibaca", image: require("../assets/images/studygroub.jpg"), status: "ongoing" },
  { title: "Killer Peter", reads: "3,5JT dibaca", image: require("../assets/images/kilerpiter.jpg"), status: "tamat" },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg"), status: "ongoing" },
  { title: "Realy Quest", reads: "221,4JT dibaca", image: require("../assets/images/riliquest.webp"), status: "tamat" },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg"), status: "ongoing" },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg"), status: "tamat" },
  { title: "Plaything", reads: "221,4JT dibaca", image: require("../assets/images/plaything.jpg"), status: "ongoing" },
];

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const itemMargin = 8;
const itemWidth = (screenWidth - (numColumns + 1) * itemMargin - 32) / numColumns;

export default function AksiScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<"semua" | "ongoing" | "tamat">("semua");

  const filteredKomik = dataKomik.filter((item) => {
    if (filter === "semua") return true;
    return item.status === filter;
  });

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={{ width: itemWidth }}
      onPress={() =>
        router.push({
          pathname: "/detail",
          params: {
            title: item.title,
            reads: item.reads,
            image: Image.resolveAssetSource(item.image).uri,
          },
        })
      }
    >
      <Image source={item.image} className="w-full h-[140px] rounded-md" resizeMode="cover" />
      <Text className="font-bold text-xs mt-1">{item.title}</Text>
      <Text className="text-[11px] text-gray-600">{item.reads}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <StatusBar barStyle={"dark-content"} backgroundColor={"#ffffff"} />

      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-2xl font-bold text-black">Aksi</Text>
        <TouchableOpacity onPress={() => router.back()}>
        <IconSymbol name="arrow.right.circle.fill" size={30} color="black" />
    </TouchableOpacity>
  </View>

      <View className="flex-row mb-2">
        <TouchableOpacity onPress={() => setFilter("semua")}>
          <Text className={`mr-4 text-base font-semibold ${filter === "semua" ? "text-black border-b-2 border-black pb-1" : "text-gray-400"}`}>
            SEMUA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("ongoing")}>
          <Text className={`mr-4 text-base font-semibold ${filter === "ongoing" ? "text-black border-b-2 border-black pb-1" : "text-gray-400"}`}>
            ONGOING
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("tamat")}>
          <Text className={`text-base font-semibold ${filter === "tamat" ? "text-black border-b-2 border-black pb-1" : "text-gray-400"}`}>
            TAMAT
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-sm mb-2 text-gray-700">{filteredKomik.length} Judul</Text>

      <FlatList
        data={filteredKomik}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={numColumns}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
