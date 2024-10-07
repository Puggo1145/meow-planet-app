import { Image } from "react-native";
import { cn } from "@/lib/tw-merge";

interface IAuthHeaderImageProps {
  className?: string;
  source: any;
}

const AuthHeaderImage = ({ className, source }: IAuthHeaderImageProps) => {
  return (
    <Image
      source={source}
      className={cn("w-full h-[180px] object-cover", className)}
    />
  );
};

export default AuthHeaderImage;