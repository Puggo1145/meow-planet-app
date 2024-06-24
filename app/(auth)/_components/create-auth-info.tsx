import { View } from "react-native";
import { useState } from "react";
// components
import SignUpTexts from "./sign-up-texts";
import FormField from "@/components/UI/FormField";
import CusButton from "@/components/UI/CusButton";

const CreateAuthInfo: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View className="px-4 h-full">
      <SignUpTexts
        heading="创建你的账户"
      />
      <View className="flex-1 mt-8">
        <FormField
          value={username}
          onChange={(text: string) => setUsername(text)}
          placeholder="用户名（2-12 个字符）"
        />
        <FormField
          type="password"
          value={password}
          onChange={(text: string) => setPassword(text)}
          placeholder="密码（8-20 位数字和大小写字母）"
          fieldStyle="mt-4"
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

export default CreateAuthInfo;