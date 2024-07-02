import React from "react";
import {
  SafeAreaView,
  View,
  Image,
} from "react-native";
import { router } from "expo-router";
// components
import CusButton from "@/components/UI/CusButton";
import { Button } from "@/components/UI/button";
import { Text } from "@/components/UI/text";
// assets
import icons from "@/constants/icons";
import images from "@/constants/images";

const Index: React.FC = () => {
  const skipSignIn = () => {
    router.replace("/cats-board");
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-full h-full items-center justify-between px-4">
        <View>
          <Image
            source={icons.logo}
            className="w-12 h-12"
          />
        </View>
        <View className="w-full pl-4">
          <Text className="text-4xl font-hbold">在这里</Text>
          <Text className="text-4xl font-hbold text-primary">发现更多猫猫</Text>
        </View>
        <View className="w-full items-center mb-8 gap-y-4">
          <Button
            className="w-full"
            size="lg"
            onPress={() => router.push("/sign-up")}
          >
            <Text className="text-lg">创建账号</Text>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full"
            onPress={() => router.push("/sign-in")}
          >
            <Text>登录</Text>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onPress={skipSignIn}
          >
            <Text className="text-blue-600 font-bold">
              先逛逛
            </Text>
          </Button>
        </View>
      </View>
      <Image source={images.catBg} className="-z-10 bottom-0 absolute w-full" />
    </SafeAreaView>
  );
};

export default Index;