import { IconSymbol } from "@/components/ui/IconSymbol";
import { router } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

const dataKomik = [
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
  { title: "High School Soldier", reads: "221,4JT dibaca", image: require("../assets/images/highschoolsoldier.jpg") },
];

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const itemMargin = 8;
const itemWidth = (screenWidth - (numColumns + 1) * itemMargin - 32) / numColumns;

type Komik = {
  title: string;
  reads: string;
  image: any;
};

export default function AksiScreen() {
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
            <Text className="text-2xl font-bold text-black">Baru</Text>
            <TouchableOpacity onPress={() => router.back()}>
            <IconSymbol name="arrow.right.circle.fill" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataKomik}
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
