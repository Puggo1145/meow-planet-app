import { Slot } from "expo-router";
import { View, SafeAreaView } from "react-native";
// components
import NavHeader from "@/components/nav-header";


const AuthLayout: React.FC = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="px-4 w-full">
        <NavHeader />
        <Slot />
      </View>
    </SafeAreaView>
  );
};

export default AuthLayout;