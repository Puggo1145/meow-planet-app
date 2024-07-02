import { ScrollView, View, Text } from "react-native";
// components
import CatRank from "./_components/cat-rank";
import CatCard from "@/components/cats-board/_components/cat-card";

const TrendingCats: React.FC = () => {
    return (
        <ScrollView
            className="w-full flex-1 bg-slate-50"
            showsVerticalScrollIndicator={false}
        >
            <View className="gap-y-3 pl-4 pb-4 bg-white">
                <Text className="font-hbold text-lg mr-4">
                    猫猫人气榜
                </Text>
                <ScrollView
                    className="flex-row gap-x-3"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CatRank key={index} rank={index} />
                    ))}
                </ScrollView>
            </View>
            <View className="pt-1 w-full flex-row flex-wrap">
                {Array.from({ length: 6 }).map((_, index) => (
                    <CatCard key={index} />
                ))}
                <View className="w-full h-[32px] items-center justify-center">
                    <Text className="text-sm text-gray-300">
                        已经到底了喵
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default TrendingCats;