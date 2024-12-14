import { Text, View, StyleSheet, Button } from "react-native";

// components
import HomeButton from "@/components/HomeButton";

export default function Index() {
    return (
        <View style={styles.container}>
            <HomeButton title="Import CSV" onPress={() => {}} />
            <HomeButton title="Import JSON" onPress={() => {}} />
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
