import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Import" }} />
            <Tabs.Screen name="quizList" options={{ title: "List" }} />
        </Tabs>
    );
}
