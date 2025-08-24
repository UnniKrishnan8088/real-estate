import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 bg-pink-200">
      <View>
        <Text className="font-bold text-red-500">Welocome to the app</Text>
      </View>
    </SafeAreaView>
  );
}
