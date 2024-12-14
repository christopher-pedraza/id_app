import { FlashList } from "@shopify/flash-list";
import { Text } from "react-native";

const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
];

export default function ItemList() {
    return (
        <FlashList
            data={DATA}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>;
            }}
            estimatedItemSize={200}
        />
    );
}
