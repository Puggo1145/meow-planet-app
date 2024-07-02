import { View, Text, Image, TouchableOpacity } from "react-native";
// assets
import { HeartIcon } from "@/lib/icons/HeartIcon";
import icons from "@/constants/icons";
import PiPi from "@/assets/images/pipi.png";
import mockPiPiImg from "@/assets/images/mock-pipi-img.jpg";

const CarCard: React.FC = () => {
    return (
        <View className="p-[2px] w-1/2">
            <View className="p-2 gap-y-3 bg-white pb-4 rounded-md">
                {/* cat info */}
                <View className="mt-1 flex-row items-center justify-between pr-2">
                    <View className="flex-row space-x-2">
                        <Image source={PiPi} className="w-9 h-9 rounded-full" />
                        <View>
                            <Text className="text-md font-hblack">屁屁</Text>
                            <Text className="text-xs font-hregular text-gray-400">屁屁是屁屁</Text>
                        </View>
                    </View>
                </View>

                {/* card 图片 */}
                <View className="w-full h-[220px] bg-secondary rounded-2xl overflow-hidden">
                    <Image source={mockPiPiImg} className="w-full h-full" />
                </View>

                {/* card footer */}
                <View className="w-full px-2 space-y-3">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center space-x-4">
                            <TouchableOpacity className="flex-row items-center gap-x-1">
                                <HeartIcon size={24} className="text-foreground" />
                                <Text className="text-xs text-foreground font-bold">999+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            className="flex-row items-center gap-x-1 bg-primary px-4 py-2 rounded-full"
                        >
                            <Image source={icons.catFood} className="w-5 h-5"/>
                            <Text className="text-xs text-white font-bold">367</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
};

export default CarCard;