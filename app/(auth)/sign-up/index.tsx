// ui
import { View, Text } from "react-native";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
// libs
import { router } from "expo-router";


const SignUpPage: React.FC = () => {
  return (
    <View className="flex-1 px-6 items-center justify-between">
      <View className="mt-8 gap-y-6">
        <Text className="text-4xl font-bold">加入猫猫星球</Text>
        <Input
          placeholder="请输入用户名"
        />
        <Input
          placeholder="请输入密码"
          asPassword
        />
        <Input
          placeholder="请再次输入密码"
          asPassword
        />
        <Button>
          <Text className="text-white text-md font-bold">
            注册
          </Text>
        </Button>
      </View>

      <GotoSignInPageHint />
    </View>
  );
};

export default SignUpPage;


/**
 * @description 从注册页面跳转到登录页面的文本提示
 */
const GotoSignInPageHint: React.FC = () => {
  const handleGotoSignIn = () => {
    router.replace("/(auth)/sign-in");
  };

  return (
    <View className="flex-row items-center">
      <Text>已有账号？</Text>
      <Button
        variant="ghost"
        onPress={handleGotoSignIn}
      >
        <Text className="text-primary font-bold">立即登录</Text>
      </Button>
    </View>
  );
}