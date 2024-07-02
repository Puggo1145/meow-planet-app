import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
// components
import FormField from "../UI/FormField";
// assets
import {BellIcon} from "@/lib/icons/BellIcon";
import icons from "@/constants/icons";

const HomeHeader: React.FC = () => {
    const [query, setQuery] = useState("");

    return (
        <View className="h-[72px] flex-row justify-between items-center pl-4 pr-6">
            <FormField
                value={query}
                onChange={setQuery}
                placeholder="搜索猫猫"
                fieldStyle="flex-1 mr-4"
                containerStyle="h-12"
                icon={icons.search}
            />
            <TouchableOpacity>
                <BellIcon size={28} className="text-foreground" />
            </TouchableOpacity>
        </View>
    );
};

export default HomeHeader;