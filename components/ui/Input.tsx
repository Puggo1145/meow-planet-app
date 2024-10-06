import { useState } from "react";
// components
import { TextInput } from "react-native";
// libs
import { cn } from "@/lib/tw-merge";
// types
import type { ComponentProps } from "react";



export interface IInputProps extends ComponentProps<typeof TextInput> {
    asPassword?: boolean
}

const Input = ({ 
    children, 
    className, 
    asPassword=false, 
    ...props 
}: IInputProps) => {
    const [visible, setVisible] = useState(false);
    
    return (
        <TextInput
            className={cn(
                "flex h-[60px] w-full rounded-full border border-input bg-background px-4 disabled:opacity-50",
                "focus:border-primary focus:bg-primary/5",
                "text-sm placeholder:text-muted-foreground leading-tight",
                "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
                className
            )}
            secureTextEntry={visible}
            {...props}
        >
            {children}
        </TextInput>
    );
};

export default Input;