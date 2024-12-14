import { FlashList } from "@shopify/flash-list";
import { Text, Button } from "react-native";
import {
    createStaticNavigation,
    useNavigation,
} from "@react-navigation/native";

const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
];

export default function ItemList() {
    const navigation = useNavigation();
    return (
        <FlashList
            data={DATA}
            renderItem={({ item }) => {
                return (
                    <Button
                        title={item.title}
                        onPress={() => navigation.navigate("Details")}
                    />
                );
            }}
            estimatedItemSize={200}
        />
    );
}
