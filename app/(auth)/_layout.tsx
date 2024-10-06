import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
// components
import NavHeader from "@/components/nav-header";


const AuthLayout: React.FC = () => {
  return (
    <SafeAreaView className="bg-white">
      <NavHeader />
      <Slot />
    </SafeAreaView>
  );
};

export default AuthLayout;