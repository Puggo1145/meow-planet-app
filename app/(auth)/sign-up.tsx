import { SafeAreaView, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
// components
import PageHeader from "@/components/UI/PageHeader";
import GetEmailorPhone from "./_components/get-email-or-phone";
import CreateAuthInfo from "./_components/create-auth-info";
import PickAvatar from "./_components/pick-avatar";

const SignUp: React.FC = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-full h-full">
        <PageHeader holdPlace />
        <PagerView
          style={{ flex: 1 }}
        >
          <GetEmailorPhone key="1" />
          <CreateAuthInfo key="2" />
          <PickAvatar key="3" />
        </PagerView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;