import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow justify-center"
      >
        <View className="flex flex-1 bg-white ">
          <View className="flex flex-row items-center justify-between px-7 py-8">
            <View>
              <Text className="text-gray-400 text-[18px]">Let's Find Your</Text>
              <Text className="text-[#122D4D] text-xl font-bold">
                Favorite Home
              </Text>
            </View>
            <Image
              className="size-[50px] rounded-full object-cover"
              resizeMode="cover"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
