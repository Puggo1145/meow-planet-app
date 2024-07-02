import { View, Text, Image } from "react-native";
import PiPi from "@/assets/images/pipi.png";

interface CatRankProps {
    rank: number;
}

const CatRank: React.FC<CatRankProps> = ({ rank }) => {
    return (
        <View className="relative w-[72px] h-[72px] bg-secondary rounded-full border-2 ml-3">
            <Image source={PiPi} className="w-full h-full rounded-full" />
            <View className="absolute w-6 h-6 rounded-full bg-primary items-center justify-center right-0">
                <Text className="text-primary-foreground text-sm font-bold">{rank + 1}</Text>
            </View>
        </View>
    );
};

export default CatRank;