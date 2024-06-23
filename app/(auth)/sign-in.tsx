import { SafeAreaView, View, Text, Image } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
// components
import FormField from "@/components/UI/FormField";
import CusButton from "@/components/UI/CusButton";
import PageHeader from "@/components/UI/PageHeader";
// assets
import images from "@/constants/images";

const SignIn: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (value: string) => {
    setForm({ ...form, email: value });
  }
  const handlePasswordChange = (value: string) => {
    setForm({ ...form, password: value });
  }

  const submit = () => {
    console.log(form);
  }

  return (
    <SafeAreaView className="bg-white h-full">

      {/* 头图 */}
      <View className="relative w-full h-[180px] overflow-hidden">
        <PageHeader />
        <Image source={images.signInImg} className="absolute -bottom-[100px] w-full h-[300px]" />
      </View>

      <View className="w-full px-4 min-h-[85vh]">
        <View>
          <Text className="text-3xl font-hbold ml-2 mt-8">
            登录猫猫星球
          </Text>
        </View>

        <View className="mt-4">
          <FormField
            label="邮箱"
            value={form.email}
            onChange={handleEmailChange}
            fieldStyle="mt-4"
            keyboardType="email-address"
            placeholder="请输入你的邮箱"
          />
          <FormField
            type="password"
            label="密码"
            value={form.password}
            onChange={handlePasswordChange}
            fieldStyle="mt-4"
            placeholder="请输入你的密码"
          />
        </View>

        <CusButton
          onPress={submit}
          containerStyle="mt-12"
          isLoading={isSubmitting}
        >
          登录
        </CusButton>

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-md">
            还没有账号？
          </Text>
          <Link
            href="/sign-up"
            className="text-md font-bold text-primary"
          >
            注册
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;