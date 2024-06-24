import { View, Text } from "react-native";

interface SignUpTextsProps {
    heading: string;
    desc?: string;
}

const SignUpTexts: React.FC<SignUpTextsProps> = ({
    heading,
    desc
}) => {
    return (
        <View className="mr-8">
            <Text className="text-3xl font-hblack tracking-widest">
                {heading}
            </Text>
            {desc && (
                <Text className="mt-1 text-gray-400 text-sm">
                    {desc}
                </Text>
            )}
        </View>
    );
};

export default SignUpTexts;