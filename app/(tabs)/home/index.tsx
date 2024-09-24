import { Text, View, SafeAreaView } from "react-native";
import { Button } from "tamagui";


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 mt-9 gap-y-4">
        <Text className="font-bold text-4xl">
          Hello Cat
        </Text>

        <View className="flex-1 flex-col">
          <Button
            themeInverse
            width={120}
            borderRadius={24}
            color="white"
            fontSize={16}
            fontWeight="bold"
          >
            Hello
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
