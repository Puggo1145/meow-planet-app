import { useState } from "react";
import { 
    View, 
    Text, 
    Image, 
    TextInput, 
    TouchableOpacity,
    type ImageURISource, type KeyboardType
} from "react-native";
// icons
import { EyeIcon } from "lucide-react-native";
import { EyeOffIcon } from "lucide-react-native";

interface FormFieldProps {
    label?: string;
    value: string;
    onChange: (text: string) => void;
    type?: "text" | "password";
    placeholder?: string;
    keyboardType?: KeyboardType;
    fieldStyle?: string;
    icon?: ImageURISource;
}

const FormField: React.FC<FormFieldProps> = ({
    label = "",
    value,
    type = "text",
    onChange,
    placeholder = "",
    keyboardType,
    fieldStyle = "",
    icon,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${fieldStyle}`}>
            {label && (
                <Text className="ml-4 text-sm text-[#616367] font-medium">
                    {label}
                </Text>
            )}
            <View className="w-full h-16 px-6 border-2 bg-secondary border-transparent border-solid rounded-full focus:border-primary
            flex-row items-center justify-between">
                {icon && <Image source={icon} className="w-6 h-6" />}
                <TextInput
                    className="flex-1 text-foreground font-bold "
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={"#5d5e62"}
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    secureTextEntry={type === "password" && !showPassword}
                />

                {type === "password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? (
                                <EyeOffIcon size={24} color={"#5d5e62"} />
                            ) : (
                                <EyeIcon size={24} color={"#5d5e62"} />
                            )
                        }
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;