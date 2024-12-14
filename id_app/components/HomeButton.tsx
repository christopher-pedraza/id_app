import { Button, StyleSheet, View } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
};

export default function HomeButton({ title, onPress }: Props) {
    return (
        <View style={styles.container}>
            <Button title={title} onPress={onPress} />
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
