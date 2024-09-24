import { Tabs } from 'expo-router';
// icons
import { House } from "lucide-react-native"


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "首页",
          tabBarInactiveTintColor: "#000000",
          tabBarActiveTintColor: "orange",
          tabBarIcon: () => <House size={24} color="transparent" fill="orange" /> 
        }}
      />
    </Tabs>
  );
}
