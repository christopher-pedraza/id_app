import { Text, View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

// Define the type for the route parameters
type RouteParams = {
    item: {
        title: string;
    };
};

export default function Quiz() {
    const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text>Details of {item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
