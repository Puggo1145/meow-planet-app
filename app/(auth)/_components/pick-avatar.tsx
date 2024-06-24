import { View, Text, Image } from "react-native";
// components
import SignUpTexts from "./sign-up-texts";
import CusButton from "@/components/UI/CusButton";
// assets
import PiPi from "@/assets/images/pipi.png";
import { PlusIcon } from "lucide-react-native";

const PickAvatar: React.FC = () => {
  return (
    <View className="px-4 h-full">
      <SignUpTexts
        heading="挑选您喜欢的猫猫头"
        desc="您可以从下方选择一个猫猫头作为您的头像，也可以选择自己上传"
      />

      <View className="w-full flex-1 items-center mt-12">
        <View className="items-center gap-2">
          <View className="overflow-hidden w-32 h-32 rounded-full border-2 border-solid border-primary">
            <Image source={PiPi} className="w-full h-full rounded-full" />
          </View>
          <View className="px-4 py-2 bg-primary rounded-full items-center">
            <Text className="font-hblack text-white">屁屁</Text>
          </View>
        </View>
        <View className="flex-row flex-wrap gap-4 justify-center mt-4">
          {
            // mock avatars
            [1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <View
                key={index}
                className="overflow-hidden w-16 h-16 rounded-full border border-solid border-foreground mt-4"
              >
                <Image source={PiPi} className="w-full h-full rounded-full" />
              </View>
            ))
          }
          <View
            className="overflow-hidden w-16 h-16 rounded-full 
            border border-solid border-foreground mt-4 items-center justify-center
            bg-gray-200"
          >
            <PlusIcon
              size={32}
              className="text-foreground"
            />
          </View>
        </View>
      </View>

      <View>
        <CusButton
          containerStyle="mt-8"
          variant="muted"
        >
          下一步
        </CusButton>
        <CusButton
          textStyles="text-sm text-blue-600"
          variant="ghost"
        >
          成为猫猫头设计师
        </CusButton>
      </View>
    </View>
  );
};

export default PickAvatar;