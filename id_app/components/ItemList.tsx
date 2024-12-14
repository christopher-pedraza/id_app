import { FlashList } from "@shopify/flash-list";
import { Text, Pressable } from "react-native";
import {
    createStaticNavigation,
    useNavigation,
    NavigationProp,
} from "@react-navigation/native";

// Define the type for the data items
type Item = {
    title: string;
};

const DATA: Item[] = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
];

export default function ItemList() {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <FlashList
            data={DATA}
            renderItem={({ item }: { item: Item }) => {
                return (
                    <Pressable
                        onPress={() => navigation.navigate("Quiz", { item })}
                    >
                        <Text>{item.title}</Text>
                    </Pressable>
                );
            }}
            estimatedItemSize={200}
        />
    );
}
