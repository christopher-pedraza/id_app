import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

// Define the type for the route parameters
type RouteParams = {
    item: {
        title: string;
    };
};

export default function Quiz() {
    const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();
    const { item } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.backButton}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>{item.title}</Text>
            </View>
            <Text>Details of {item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        backgroundColor: "#f0f0f0",
    },
    backButton: {
        marginRight: 10,
        width: 50,
        backgroundColor: "#000",
    },
});
