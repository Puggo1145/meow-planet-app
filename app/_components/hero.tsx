import { View, Text, Image } from "react-native";
// constants
import { images } from "@/constants/images";

const Hero: React.FC = () => {
    return (
        <View className="w-full flex-1 items-start justify-center ml-8">
            <Image
                source={images.logo}
                className="w-[96px] h-[96px]"
            />
            <Text className="font-bold text-4xl text-primary">
                猫猫星球
            </Text>
            <Text className="mt-2 text-sm text-gray-400">
                让美好发生
            </Text>
        </View>
    );
};

export default Hero;