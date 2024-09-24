import { View, SafeAreaView } from "react-native";
// components
import Hero from "./_components/hero";
import HomeActions from "./_components/home-actions";


const Index = () => {
  return (
    <SafeAreaView className="bg-white dark:bg-gray-800">
      <View className="px-4 w-full h-full items-center justify-between">
        <Hero />
        <HomeActions />
      </View>
    </SafeAreaView>
  );
};

export default Index;