import { TouchableOpacity, Text, Image } from "react-native";
import { ImageURISource } from "react-native";
import icons from "@/constants/icons";

interface CusButtonProps {
  children: React.ReactNode;
  containerStyle?: string;
  textStyles?: string;
  variant?: "default" | "secondary" | "outline" | "muted" | "ghost";
  onPress?: () => void;
  isLoading?: boolean;
  icon?: ImageURISource
}

const CusButton = ({
  children,
  containerStyle,
  textStyles,
  onPress,
  isLoading,
  variant,
  icon
}: CusButtonProps) => {
  const variants = {
    default: {
      bg: "bg-primary",
      text: "text-primary-foreground",
    },
    secondary: {
      bg: "bg-secondary",
      text: "text-secondary-foreground",
    },
    outline: {
      bg: "border-2 border-solid border-secondary",
      text: "text-secondary-foreground",
    },
    muted: {
      bg: "bg-gray-200",
      text: "text-gray-500",
    },
    ghost: {
      bg: "bg-transparent",
      text: "text-foreground",
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading || !onPress}
      className={`
      min-h-[62px] px-8 justify-center items-center rounded-full flex-row
      ${containerStyle ?? ""} ${variant ? variants[variant].bg : variants.default.bg} ${isLoading ? "opacity-50" : ""}
      `}
    >
      {icon && (
        <Image
          source={icon}
          className="w-6 h-6"
        />
      )}
      <Text className={`
        ml-2 text-lg font-bold ${variant ? variants[variant].text : variants.default.text}
        ${textStyles ?? ""}
      `}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CusButton;