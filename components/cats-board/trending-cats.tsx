import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
// assets
import {
    HeartIcon,
    MessageCircleMoreIcon,
    FishIcon,
    PawPrintIcon,
    MapPinIcon,
    PlusIcon
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
                <View className="w-full mt-6 space-y-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <View
                            key={index}
                            className="px-4 w-full space-y-4 bg-white pb-4"
                        >
                            {/* card header */}
                            <View className="flex-row items-center justify-between pr-2">
                                <View className="flex-row space-x-2">
                                    <Image source={PiPi} className="w-9 h-9 rounded-full" />
                                    <View>
                                        <Text className="text-md font-hblack">屁屁</Text>
                                        <Text className="text-xs font-hregular text-gray-400">屁屁是屁屁</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    className="px-4 py-2 rounded-full bg-secondary flex-row items-center"
                                    activeOpacity={0.8}
                                >
                                    <PlusIcon size={16} className="text-foreground mr-1" />
                                    <Text className="font-bold text-secondary-foreground">
                                        关注
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* card 图片 */}
                            <View className="w-full h-[240px] bg-secondary rounded-2xl overflow-hidden">
                                <Image source={mockPiPiImg} className="w-full h-full" />
                            </View>

                            {/* card 信息 */}
                            <View className="w-full px-2 space-y-3">
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center space-x-4">
                                        <TouchableOpacity className="flex-row items-center space-x-1">
                                            <HeartIcon size={24} className="text-foreground" />
                                            <Text className="text-xs text-foreground font-bold">999+</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className="flex-row items-center space-x-1">
                                            <MessageCircleMoreIcon size={24} className="text-foreground" />
                                            <Text className="text-xs text-foreground font-bold">999+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity className="flex-row items-center space-x-1 bg-primary px-4 py-2 rounded-full">
                                        <FishIcon size={20} className="text-white" />
                                        <Text className="text-xs text-white font-bold">367</Text>
                                    </TouchableOpacity>
                                </View>
                                <View className="space-y-2">
                                    <View className="flex-row items-center space-x-2">
                                        <PawPrintIcon size={20} className="text-gray-600" />
                                        <Text className="text-sm text-foreground">奶牛</Text>
                                    </View>
                                    <View className="flex-row items-center space-x-2">
                                        <MapPinIcon size={20} className="text-gray-600" />
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