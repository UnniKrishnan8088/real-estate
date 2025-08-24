import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <Image source={require("@/assets/images/bg.png")} />
      <View className="items-center">
        <Image source={require("@/assets/images/app-logo.jpg")} className="w-[280px] h-[70px] object-cover" />
        <TouchableOpacity className="mt-8 bg-[#006EFF] w-[280px] rounded-[60px]">
          <Text className="text-xs font-semibold text-white text-center py-4 ">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
