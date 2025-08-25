import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

export default function SignIn({}: Props) {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex items-center mt-16">
          <Image
            source={require("@/assets/images/app-logo.png")}
            className="w-[260px] h-[65px] object-cover"
          />
        </View>
        <View className="px-6 mt-14">
          <Text className="text-black text-[16px] font-semibold">Sign In</Text>
          <View className="mt-5 gap-5">
            <View>
              <Text className="text-xs text-black font-semibold mb-1">
                Username
              </Text>
              <TextInput
                className="border rounded-xl px-3 text-xs"
                placeholder="Username"
              />
            </View>
            <View>
              <Text className="text-xs text-black font-semibold mb-1">
                Password
              </Text>
              <TextInput
                className="border rounded-xl px-3 text-xs"
                placeholder="Username"
                secureTextEntry
              />
            </View>
          </View>
          <TouchableOpacity className="mt-8 bg-[#006EFF] w-full rounded-[60px]">
            <Text className="text-xs font-semibold text-white text-center py-4 ">
              Sign In
            </Text>
          </TouchableOpacity>

          <View className="mt-8">
            <Text className="text-center text-[#616161] text-[10px] before:contnet">
              Or continue with
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
