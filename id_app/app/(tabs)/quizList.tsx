import { Text, View, StyleSheet, Button } from "react-native";

// components
import ItemList from "@/components/ItemList";

export default function QuizList() {
    return (
        <View style={styles.container}>
            <ItemList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
