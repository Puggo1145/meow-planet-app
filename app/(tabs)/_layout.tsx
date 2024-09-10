import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="(home)" 
        options={{ 
          headerShown: false,
          title: "首页",
          tabBarInactiveTintColor: "#000000",
          tabBarActiveTintColor: "orange"
        }} 
      />
    </Tabs>
  );
}
