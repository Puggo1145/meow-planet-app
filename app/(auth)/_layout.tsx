import { useMemo } from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
// components
import NavHeader from "@/components/nav-header";
import AuthHeaderImage from "./_components/auth-header-image";
// lib
import { usePathname } from "expo-router";
// assets
import { images } from "@/constants/images";


const AuthLayout: React.FC = () => {
  const pathname = usePathname();

  const authHeaderImageMapper: Record<string, any> = {
    "/(auth)/sign-in": images.signInHeaderImg,
    "/(auth)/sign-up": images.signUpHeaderImg,
  }

  const headerImageSource = useMemo(() => {
    return authHeaderImageMapper[pathname];
  }, [pathname]);

  return (
    <SafeAreaView className="bg-white h-full">
      <NavHeader />
      <AuthHeaderImage source={headerImageSource} />
      <Slot />
    </SafeAreaView>
  );
};

export default AuthLayout;