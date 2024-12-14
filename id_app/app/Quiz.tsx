import { Text, View, StyleSheet, Pressable } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

// Define the type for the route parameters
type RouteParams = {
    item: {
        title: string;
    };
};

const tempJSON = `[{"id":"0","prev":null,"next":"1","option":"Es rojo","group":"color","result":null},{"id":"0","prev":null,"next":"2","option":"Es verde","group":"color","result":null},{"id":"0","prev":null,"next":"3","option":"Es azul","group":"color","result":null},{"id":"1","prev":"0","next":"4","option":"Es cuadrado","group":"forma","result":null},{"id":"1","prev":"0","next":"5","option":"Es triangular","group":"forma","result":null},{"id":"2","prev":"0","next":"6","option":"Es fruta","group":"comida","result":null},{"id":"2","prev":"0","next":"7","option":"Es verdura","group":"comida","result":null},{"id":"3","prev":"0","next":null,"option":null,"group":null,"result":"Cielo"},{"id":"4","prev":"1","next":null,"option":null,"group":null,"result":"Caja"},{"id":"5","prev":"1","next":null,"option":null,"group":null,"result":"Pirámide"},{"id":"6","prev":"2","next":null,"option":null,"group":null,"result":"Manzana"},{"id":"7","prev":"2","next":null,"option":null,"group":null,"result":"Lechuga"}]`;

export default function Quiz() {
    const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();
    const { item } = route.params;
    const navigation = useNavigation();
    console.log("tempJSON", JSON.parse(tempJSON));

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.backButton}
                >
                    <Text>Back</Text>
                </Pressable>
                <Text>{item.title}</Text>
            </View>
            <Text>{tempJSON}</Text>
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
