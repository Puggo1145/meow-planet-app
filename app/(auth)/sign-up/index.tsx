// ui
import { View, Text } from "react-native";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
// components
import SignUpHeader from "./_components/sign-up-header";


const SignUpPage: React.FC = () => {
  return (
    <View className="h-full px-6">
      <SignUpHeader />
      <View className="mt-4 gap-y-4">
        <Input
          placeholder="用户名"
        />
        <Input
          placeholder="密码"
        />
        <Button>
          <Text className="text-white text-md font-bold">
            注册
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default SignUpPage;