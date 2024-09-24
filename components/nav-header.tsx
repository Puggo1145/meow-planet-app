import { View } from "react-native";
// utils
import { router } from "expo-router";
// components
import Button from "./ui/Button";
// icons
import { ChevronLeft } from "lucide-react-native";


const NavHeader = () => {
    return (
        <View className="w-full h-[60px]">
            <Button
                variant="secondary"
                className="rounded-full w-12 h-12"
                onPress={() => router.back()}
            >
                <ChevronLeft className="w-6 h-6" color="black" />
            </Button>
        </View>
    );
};

export default NavHeader;