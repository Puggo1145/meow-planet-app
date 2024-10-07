// ui
import { View, Text } from "react-native";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
// libs
import { router } from "expo-router";


const SignInPage: React.FC = () => {

  return (
    <View className="flex-1 px-6 items-center justify-between">
      <View className="mt-8 gap-y-6">
        <Text className="text-4xl font-bold">登录猫猫星球</Text>
        <Input
          placeholder="用户名"
        />
        <Input
          placeholder="密码"
          asPassword
        />
        <Button>
          <Text className="text-white text-md font-bold">
            登陆
          </Text>
        </Button>
      </View>

      <GotoSignUpPageHint />
    </View>
  );
};

export default SignInPage;


/**
 * @description 从登录页面跳转到注册页面的文本提示
 */
const GotoSignUpPageHint: React.FC = () => {
  const handleGotoSignIn = () => {
    router.replace("/(auth)/sign-up");
  };

  return (
    <View className="flex-row items-center">
      <Text>还没有账号？</Text>
      <Button
        variant="ghost"
        onPress={handleGotoSignIn}
      >
        <Text className="text-primary font-bold">立即创建</Text>
      </Button>
    </View>
  );
}