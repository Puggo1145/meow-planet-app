import { View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
// icons
import { ArrowLeftIcon } from "lucide-react-native";

interface PageHeaderProps {
    holdPlace?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ holdPlace }) => {
    const navigateBack = () => router.back();

    return (
        <View 
            className={`w-full h-[60px] px-4 justify-center
            ${!holdPlace && "absolute z-50"}`}
        >
            <TouchableOpacity
                className="w-6 h-6"
                onPress={navigateBack}
            >
                <ArrowLeftIcon size={24} color={"#333"} />
            </TouchableOpacity>
        </View>
    );
};

export default PageHeader;