import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
} from "react-native";
import { router } from "expo-router";
// components
import CusButton from "@/components/UI/CusButton";
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
          <Text className="text-4xl font-bold font-hbold">在这里</Text>
          <Text className="text-4xl font-bold font-hbold text-primary">发现更多猫猫</Text>
        </View>
        <View className="w-full items-center mb-4">
          <CusButton
            containerStyle="w-full mb-4"
            onPress={() => router.push("/sign-up")}
          >
            创建账号
          </CusButton>
          <CusButton
            variant="secondary"
            containerStyle="w-full"
            onPress={() => router.push("/sign-in")}
          >
            登录
          </CusButton>
          <CusButton
            variant="ghost"
            textStyles="text-sm text-blue-600"
            onPress={skipSignIn}
          >
            先逛逛
          </CusButton>
        </View>
      </View>
      <Image source={images.catBg} className="-z-10 bottom-0 absolute w-full" />
    </SafeAreaView>
  );
};

export default Index;