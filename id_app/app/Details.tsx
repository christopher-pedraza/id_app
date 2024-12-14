import { Text, View, StyleSheet, Button } from "react-native";

type Props = {
    title: string;
};

export default function Details({ title }: Props) {
    return (
        <View style={styles.container}>
            <Text>Details of {title}</Text>
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
