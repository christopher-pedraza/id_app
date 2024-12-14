import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";

type Props = {
    data: string;
};

interface Option {
    group?: string | null;
    id: string;
    next?: string | null;
    option?: string | null;
    prev?: string | null;
    result?: string | null;
    info?: string | null;
    img?: string | null;
}

export default function QuizOptions({ data }: Props) {
    const jsonObject = JSON.parse(data);
    const groupedOptions = jsonObject.reduce(
        (groupedObjs: { [key: string]: Option[] }, obj: Option) => {
            const key = obj.id;
            if (!groupedObjs[key]) {
                groupedObjs[key] = [];
            }
            groupedObjs[key].push(obj);
            return groupedObjs;
        },
        {}
    );

    const [currentOptionId, setCurrentOptionId] = useState("0");
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const handleOptionPress = (option: Option) => {
        setSelectedOptions([...selectedOptions, option]);
        if (option.next) {
            setCurrentOptionId(option.next);
        }
    };

    const handlePreviousPress = () => {
        if (selectedOptions.length > 0) {
            const previousOption = selectedOptions[selectedOptions.length - 1];
            setSelectedOptions(selectedOptions.slice(0, -1));
            setCurrentOptionId(previousOption.id);
        }
    };

    return (
        <View>
            {groupedOptions[currentOptionId].map(
                (option: Option, index: number) =>
                    option.option ? (
                        <Pressable
                            key={index}
                            onPress={() => handleOptionPress(option)}
                            style={styles.optionPressable}
                        >
                            {option.img && (
                                <Image
                                    source={{ uri: option.img }}
                                    style={styles.image}
                                />
                            )}
                            <Text>{option.option}</Text>
                        </Pressable>
                    ) : (
                        <Pressable
                            key={index}
                            onPress={() => handleOptionPress(option)}
                            style={styles.resultPressable}
                        >
                            {option.img && (
                                <Image
                                    source={{ uri: option.img }}
                                    style={styles.image}
                                />
                            )}
                            <Text>{option.result}</Text>
                        </Pressable>
                    )
            )}
            <Pressable
                onPress={handlePreviousPress}
                disabled={selectedOptions.length === 0}
                style={[
                    styles.previousButton,
                    selectedOptions.length === 0 && styles.disabledButton,
                ]}
            >
                <Text>Previous</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    optionPressable: {
        padding: 10,
        margin: 5,
        backgroundColor: "#d3d3d3",
        borderRadius: 5,
        alignItems: "center",
    },
    resultPressable: {
        padding: 10,
        margin: 5,
        backgroundColor: "#add8e6",
        borderRadius: 5,
        alignItems: "center",
    },
    previousButton: {
        padding: 10,
        margin: 5,
        backgroundColor: "#ffcccb",
        borderRadius: 5,
        alignItems: "center",
    },
    disabledButton: {
        backgroundColor: "#f0f0f0",
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});
