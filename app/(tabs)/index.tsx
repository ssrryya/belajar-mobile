import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

const rekomendasi = [
  {
    id: 1,
    title: "Manajer Kim",
    episode: "Episode - 1",
    year: "Rilis 2023",
    image: require("../../assets/images/manajerkim.webp"),
  },
  {
    id: 2,
    title: "Eleceed",
    episode: "Episode - 1",
    year: "Rilis 2023",
    image: require("../../assets/images/eleced.jpeg"),
  },
  {
    id: 3,
    title: "Killer Peter",
    episode: "Episode - 1",
    year: "Rilis 2024",
    image: require("../../assets/images/kilerpiter.jpg"),
  },
  {
    id: 4,
    title: "Realy Quest",
    episode: "Episode - 1",
    year: "Rilis 2023",
    image: require("../../assets/images/riliquest.webp"),
  },
];

const favorit = [
  {
    id: 1,
    title: "Eleceed",
    image: require("../../assets/images/eleced.jpeg"),
  },
  {
    id: 2,
    title: "Manajer Kim",
    image: require("../../assets/images/manajerkim.webp"),
  },
  {
    id: 3,
    title: "Killer Peter",
    image: require("../../assets/images/kilerpiter.jpg"),
  },
  {
    id: 4,
    title: "Eleceed",
    image: require("../../assets/images/eleced.jpeg"),
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const goToDetail = (item: any) => {
    router.push({
      pathname: "/detail",
      params: {
        title: item.title,
        episode: item.episode,
        year: item.year,
        image: Image.resolveAssetSource(item.image).uri,
      },
    });
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View className="bg-white p-5 shadow">
        <Text className="text-[20px] text-[#4A9782] text-center font-bold mb-2">
          Manwhakuuuu
        </Text>
      </View>

      <FlatList
        ListHeaderComponent={
          <Text className="text-[25px] font-bold mt-4 mx-4">Rekomendasi</Text>
        }
        data={rekomendasi}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetail(item)}>
            <View className="bg-white mt-2 mx-2 mb-2 flex-row p-3 rounded-md shadow">
              <Image
                source={item.image}
                className="w-[100px] h-[120px] rounded"
              />
              <View className="ml-3 justify-center">
                <Text className="text-black text-base font-bold">{item.title}</Text>
                <Text className="text-black mt-2">{item.episode}</Text>
                <Text className="text-black mt-2">{item.year}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <>
            <Text className="text-[25px] font-bold mt-4 mx-4">Favorit</Text>

            <FlatList
              data={favorit}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 10, paddingVertical: 10 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    goToDetail({ ...item, episode: "Episode - ?", year: "Tidak diketahui" })
                  }>
                  <View className="bg-white w-[100px] mr-3 rounded-md overflow-hidden shadow">
                    <Image source={item.image} className="w-full h-[130px]" />
                    <View className="p-2 items-center">
                      <Text className="text-black text-sm text-center">{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </>
        }
      />
    </View>
  );
}
