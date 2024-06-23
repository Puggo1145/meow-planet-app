import { Slot, Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const [fontsLoaded, error] = useFonts({
    "HarmonyOS_SansSC_Regular": require("../assets/fonts/HarmonyOS_SansSC_Regular.ttf"),
    "HarmonyOS_SansSC_Bold": require("../assets/fonts/HarmonyOS_SansSC_Bold.ttf"),
    "HarmonyOS_SansSC_Black": require("../assets/fonts/HarmonyOS_SansSC_Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Stack>
  );
};

export default RootLayout;