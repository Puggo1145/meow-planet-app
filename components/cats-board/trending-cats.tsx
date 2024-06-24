import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
// assets
import {
    HeartIcon,
    CakeIcon,
    StarIcon,
    PawPrintIcon,
    MapPinIcon
} from "lucide-react-native";
import PiPi from "@/assets/images/pipi.png";
import mockPiPiImg from "@/assets/images/mock-pipi-img.jpg";

const TrendingCats: React.FC = () => {
    return (
        <View>
            <ScrollView className="w-full h-full">
                <View className="gap-y-3 pl-4">
                    <Text className="font-hbold text-lg mr-4">
                        猫猫人气榜
                    </Text>
                    <ScrollView
                        className="flex-row gap-x-3"
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <View
                                key={index}
                                className="relative w-[72px] h-[72px] bg-secondary rounded-full border-2"
                            >
                                <Image source={PiPi} className="w-full h-full rounded-full" />
                                <View className="absolute w-6 h-6 rounded-full bg-primary items-center justify-center right-0">
                                    <Text className="text-primary-foreground text-sm font-bold">{index + 1}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View className="w-full mt-6 space-y-4 px-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <View
                            key={index}
                            className="w-full h-[400px] rounded-2xl space-y-4 bg-white border-2 border-[#e9e9e9] p-2"
                        >
                            {/* card 图片 */}
                            <View className="w-full h-[240px] bg-secondary rounded-xl overflow-hidden shadow-md">
                                <Image source={mockPiPiImg} className="w-full h-full" />
                            </View>
                            {/* card 信息 */}
                            <View className="w-full px-2 space-y-3">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-xl font-hblack">屁屁</Text>
                                    <View className="flex-row items-center space-x-4">
                                        <TouchableOpacity className="flex-row items-center space-x-1">
                                            <HeartIcon size={24} className="text-foreground" />
                                            <Text className="text-xs text-foreground font-bold">997</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className="flex-row items-center space-x-1">
                                            <StarIcon size={24} className="text-foreground" />
                                            <Text className="text-xs text-foreground font-bold">999+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View className="space-y-2">
                                    <View className="flex-row items-center space-x-2">
                                        <CakeIcon size={20} className="text-gray-400" />
                                        <Text className="text-sm text-foreground">2021-1-2</Text>
                                    </View>
                                    <View className="flex-row items-center space-x-2">
                                        <PawPrintIcon size={20} className="text-gray-400" />
                                        <Text className="text-sm text-foreground">奶牛</Text>
                                    </View>
                                    <View className="flex-row items-center space-x-2">
                                        <MapPinIcon size={20} className="text-gray-400" />
                                        <Text className="text-sm text-foreground">图北楼</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default TrendingCats;