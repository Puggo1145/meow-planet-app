import { View, Text, Image, ImageProps } from "react-native";
import { Tabs } from "expo-router";
// icons
import icons from "@/constants/icons";

const TabsLayout: React.FC = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#D9D9D9",
          tabBarActiveTintColor: "#F27F08",
          tabBarStyle: {
            paddingTop: 12,
            borderTopColor: "transparent",
          },
        }}
      >
        <Tabs.Screen
          name="cats-board"
          options={{
            title: "图集",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.catBoard}
                color={color}
                name="图集"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="help-cat"
          options={{
            title: "救助",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.helpCat}
                color={color}
                name="救助"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            title: "猫猫文创",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.shop}
                color={color}
                name="猫猫文创"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "我的",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="我的"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ImageProps["source"],
  color: string,
  name: string,
  focused: boolean,
}) => {
  return (
    <View className="flex flex-col items-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-8 h-8"
        tintColor={color}
      />
      <Text className={`${focused ? 'font-semibold text-primary' : 'font-bold text-[#D9D9D9]'} text-[10px]`}>
        {name}
      </Text>
    </View>
  )
}