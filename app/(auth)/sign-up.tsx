import { SafeAreaView, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
// components
import PageHeader from "@/components/UI/PageHeader";


const SignUp: React.FC = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-full h-full">
        <PageHeader />
        <PagerView>

        </PagerView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;