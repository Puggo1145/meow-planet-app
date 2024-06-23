import { View, Text } from "react-native";
// components
import SignUpTexts from "./sign-up-texts";

const PickAvatar: React.FC = () => {
  return (
    <View className="px-4 h-full">
      <SignUpTexts 
        heading="挑选您喜欢的头像"
        desc="您可以从下方选择一个头像，也可以选择自己上传头像"
      />
    </View>
  );
};

export default PickAvatar;