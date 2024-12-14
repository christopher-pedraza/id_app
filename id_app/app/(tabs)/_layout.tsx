import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Import" }} />
            <Tabs.Screen name="QuizList" options={{ title: "List" }} />
        </Tabs>
    );
}
