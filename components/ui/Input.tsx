import { useState } from "react";
// components
import { TextInput, View } from "react-native";
// ui
import Button from "./Button";
// icons
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
// libs
import { cn } from "@/lib/tw-merge";
// types
import type { ComponentProps } from "react";



export interface IInputProps extends ComponentProps<typeof TextInput> {
    asPassword?: boolean;
}

const Input = ({
    className,
    asPassword = false,
    ...props
}: IInputProps) => {
    // 密码显示与隐藏
    const [visible, setVisible] = useState(false);
    const onVisibleChange = () => setVisible(!visible);
    
    // 输入框聚焦样式管理
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <View
            className={cn(
                "flex-row h-[60px] w-full items-center justify-between rounded-full border bg-background px-4 disabled:opacity-50",
                {
                    "border-input bg-background": !isFocused,
                    "border-primary bg-primary/5": isFocused,
                },
                className
            )}
        >
            <TextInput
                className="flex-1 h-full text-sm placeholder:text-muted-foreground leading-tight"
                secureTextEntry={asPassword && !visible}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
            />
            {asPassword && (
                <PasswordVisibleController
                    visible={visible}
                    onVisibleChange={onVisibleChange}
                />
            )}
        </View>
    );
};

export default Input;


interface IPasswordVisibleControllerProps {
    visible: boolean
    onVisibleChange: () => void;
}

const PasswordVisibleController = ({ visible, onVisibleChange }: IPasswordVisibleControllerProps) => {
    return (
        <Button variant="ghost" onPress={onVisibleChange}>
            {
                visible
                    ? <EyeOffIcon size={20} color="gray" />
                    : <EyeIcon size={20} color="gray" />
            }
        </Button>
    )
}
