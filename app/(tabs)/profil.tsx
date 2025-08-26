import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const keluar = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <Text className="text-2xl font-bold text-[#4A9782] mb-4">Profil</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-5 bg-[#f9f9f9] rounded-lg p-4 shadow-sm">
          <Text className="text-sm text-gray-500 mb-1">Username</Text>
          <Text className="text-base text-gray-800 mb-3">.....@gmail.com</Text>

          <Text className="text-sm text-gray-500 mb-1">ID Pengguna</Text>
          <Text className="text-base text-gray-800 mb-3">ID1234567890</Text>
        </View>

        <View className="mt-2">
          <TouchableOpacity className="bg-[#f2f2f2] p-4 rounded-lg mb-2 shadow-sm">
            <Text className="text-base text-gray-800">Data</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#f2f2f2] p-4 rounded-lg mb-2 shadow-sm">
            <Text className="text-base text-gray-800">Notifikasi</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#f2f2f2] p-4 rounded-lg mb-2 shadow-sm">
            <Text className="text-base text-gray-800">Bahasa</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#f2f2f2] p-4 rounded-lg mb-2 shadow-sm">
            <Text className="text-base text-gray-800">Tentang Aplikasi</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#f2f2f2] p-4 rounded-lg mb-2 shadow-sm">
            <Text className="text-base text-gray-800">Keamanan</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#f2f2f2] p-4 rounded-lg mb-2 shadow-sm">
            <Text className="text-base text-gray-800">Privasi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#f2f2f2] p-4 rounded-lg mb-2 shadow-sm"
            onPress={() => keluar.replace("/login")}>
            <Text className="text-center text-red-600 text-lg">Keluar Akun</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
