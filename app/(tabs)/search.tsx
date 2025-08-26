import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Search() {
  const router = useRouter();

  const populerData = [
    {
      title: "Eleced",
      reads: "120k",
      image: require("../../assets/images/eleced.jpeg"),
    },
    {
      title: "Kiler Piter",
      reads: "98k",
      image: require("../../assets/images/kilerpiter.jpg"),
    },
    {
      title: "High School Soldier",
      reads: "210k",
      image: require("../../assets/images/highschoolsoldier.jpg"),
    },
    {
      title: "Lookism",
      reads: "340k",
      image: require("../../assets/images/lookism.jpg"),
    },
  ];

  return (
    <ScrollView className="bg-white px-4">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <Text className="text-2xl font-bold text-[#4A9782] mb-4">Cari</Text>
      
      <TextInput
        placeholder="Cari serial atau kreator"
        className="border border-gray-300 rounded-lg p-3 mb-5"
      />

      <Text className="text-lg font-bold my-2">Sedang Populer</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
        {populerData.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="mr-3"
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
            <Image source={item.image} className="w-28 h-44 rounded-lg" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text className="text-lg font-bold my-2">Telusuri semua</Text>
      <View className="flex flex-row flex-wrap justify-between">
        <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg p-3 mb-3" onPress={() => router.push('/baru')}>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Baru</Text>
            <Image source={require('../../assets/images/eleced.jpeg')} className="w-24 h-24 rounded-lg" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg p-3 mb-3" onPress={() => router.push('/+not-found')}>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Aksi</Text>
            <Image source={require('../../assets/images/manajerkim.webp')} className="w-24 h-24 rounded-lg" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg p-3 mb-3" onPress={() => router.push('/komedi')}>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Komedi</Text>
            <Image source={require('../../assets/images/eleced.jpeg')} className="w-24 h-24 rounded-lg" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg p-3 mb-3" onPress={() => router.push('/horor')}>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Horor</Text>
            <Image source={require('../../assets/images/eleced.jpeg')} className="w-24 h-24 rounded-lg" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg p-3 mb-3" onPress={() => router.push('/thriller')}>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Thriller</Text>
            <Image source={require('../../assets/images/endhascome.jpg')} className="w-24 h-24 rounded-lg" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-gray-100 rounded-lg p-3 mb-3" onPress={() => router.push('/keluarga')}>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Keluarga</Text>
            <Image source={require('../../assets/images/eleced.jpeg')} className="w-24 h-24 rounded-lg" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
