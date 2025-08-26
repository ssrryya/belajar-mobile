import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'user@gmail.com' && password === '12345678') {
      router.replace('/(tabs)');
    } else {
      Alert.alert('Login gagal', 'Email atau password salah');
    }
  };

  return (
    <View className="flex-1 justify-center bg-white p-5">
      <Text className="text-3xl font-bold mb-6 text-center">Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
      />

      <TouchableOpacity onPress={handleLogin} className="bg-[#4A9787] py-3 rounded-xl items-center">
        <Text className="text-white text-base">Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}
