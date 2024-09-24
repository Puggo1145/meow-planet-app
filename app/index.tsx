import { View, Text, SafeAreaView } from "react-native";
import Button from "@/components/ui/Button";


const Index = () => {
  return (
    <SafeAreaView>
        <View className="w-full h-full items-center justify-between">
            <Text>
                Hello World
            </Text>
            <View>
                <Button variant="default">
                  Hello
                </Button>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Index;