import { View, Text } from "react-native";
import { router } from "expo-router";
import Button from "@/components/ui/Button";


const HomeActions = () => {
  return (
    <View className="w-full h-[92px] flex-row gap-x-3">
      <Button
        variant="secondary"
        className="flex-1 rounded-full"
      >
        <Text className="text-md font-bold text-secondary-foreground">
          登录
        </Text>
      </Button>
      <Button
        variant="default"
        className="flex-1 rounded-full"
        onPress={() => router.push("/(auth)/sign-up")}
      >
        <Text className="text-md font-bold text-primary-foreground">
          注册
        </Text>
      </Button>
    </View>
  );
};

export default HomeActions;