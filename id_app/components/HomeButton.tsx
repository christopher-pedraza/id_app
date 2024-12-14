import { Pressable, StyleSheet, View, Text } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
};

export default function HomeButton({ title, onPress }: Props) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Text>{title}</Text>
            </Pressable>
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
