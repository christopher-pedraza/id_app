import { Text, View, StyleSheet, Pressable } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

// components
import QuizOptions from "@/components/QuizOptions";

// Define the type for the route parameters
type RouteParams = {
    item: {
        title: string;
    };
};

const tempJSON = `[{"id":"0","next":"1","option":"Es rojo","group":"color","img":"https://cdn.sanity.io/images/599r6htc/regionalized/76bc9851482d167e4de2b2b8965633b310d09b69-1440x810.png"},{"id":"0","next":"2","option":"Es verde","group":"color","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJt8-AvffNloMLJDKWG1xW9NIoUgC-9kyWg&s"},{"id":"0","next":"3","option":"Es azul","group":"color","img":"https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/03/blue-cobalt.jpg?resize=1500%2C1060&ssl=1"},{"id":"1","prev":"0","next":"4","option":"Es cuadrado","group":"forma","img":"https://img.freepik.com/premium-vector/realistic-picture-frame-isolated-white-background-blank-poster-mockup-empty-photo-frame-vector-illustration_970024-58477.jpg?semt=ais_hybrid"},{"id":"1","prev":"0","next":"5","option":"Es triangular","group":"forma"},{"id":"2","prev":"0","next":"6","option":"Es fruta","group":"comida","img":"https://img.freepik.com/premium-vector/flat-illustration-fruits-vector-fruits-drawn-vector-icons-set-vector-fruits_734654-1025.jpg"},{"id":"2","prev":"0","next":"7","option":"Es verdura","group":"comida"},{"id":"3","prev":"0","result":"Cielo","img":"https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg?w=1029&webp=1","info":"El cielo es azul porque la luz del sol se dispersa en la atmósfera y los colores del espectro visible se dispersan en diferentes longitudes de onda. El azul es el color que se dispersa más, por lo que vemos el cielo azul."},{"id":"3","prev":"0","result":"Oceano","img":"https://cdn.mos.cms.futurecdn.net/K6WmxeWt9gT5CcQQRKUuQM-1200-80.jpg","info":"El oceano porque el agua refleja el color del cielo"},{"id":"3","prev":"0","result":"Blue Poppy"},{"id":"4","prev":"1","result":"Caja"},{"id":"5","prev":"1","result":"Pirámide"},{"id":"6","prev":"2","result":"Manzana"},{"id":"7","prev":"2","result":"Lechuga"}]`;

export default function Quiz() {
    const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();
    const { item } = route.params;
    const navigation = useNavigation();

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
            <QuizOptions data={tempJSON} />
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
