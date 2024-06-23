import { View, Text } from "react-native";
import { useState } from "react";
// components
import SignUpTexts from "./sign-up-texts";
import CusButton from "@/components/UI/CusButton";
import FormField from "@/components/UI/FormField";

const GetEmailorPhone: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  
  return (
    <View className="px-4 h-full">
      <SignUpTexts 
        heading="使用邮箱注册"
        desc="请输入您的邮箱地址或手机号码"
      />
      <View className="flex-1 mt-8">
        <FormField
          value={email}
          onChange={(text: string) => setEmail(text)}
          placeholder="请输入邮箱"
          keyboardType="email-address"
        />
        <CusButton 
          containerStyle="mt-8"
          variant="muted"
        >
            下一步
        </CusButton>
      </View>
    </View>
  );
};

export default GetEmailorPhone;