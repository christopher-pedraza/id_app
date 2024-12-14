import { View, Pressable, Text } from "react-native";

type Props = {
    data: string;
};

/* JSON:
[{"group": "color", "id": "0", "next": "1", "option": "Es rojo", "prev": null, "result": null}, {"group": "color", "id": "0", "next": "2", "option": "Es verde", "prev": null, "result": null}, {"group": "color", "id": "0", "next": "3", "option": "Es azul", "prev": null, "result": null}, {"group": "forma", "id": "1", "next": "4", "option": "Es cuadrado", "prev": "0", "result": null}, {"group": "forma", "id": "1", "next": "5", "option": "Es triangular", "prev": "0", "result": null}, {"group": "comida", "id": "2", "next": "6", "option": "Es fruta", "prev": "0", "result": null}, {"group": "comida", "id": "2", "next": "7", "option": "Es verdura", "prev": "0", "result": null}, {"group": null, "id": "3", "next": null, "option": null, "prev": "0", "result": "Cielo"}, {"group": null, "id": "4", "next": null, "option": null, "prev": "1", "result": "Caja"}, {"group": null, "id": "5", "next": null, "option": null, "prev": "1", "result": "Pirámide"}, {"group": null, "id": "6", "next": null, "option": null, "prev": "2", "result": "Manzana"}, {"group": null, "id": "7", "next": null, "option": null, "prev": "2", "result": "Lechuga"}]
*/

export default function QuizOptions({ data }: Props) {
    const jsonObject = JSON.parse(data);
    // group the options by id
    interface Option {
        group: string | null;
        id: string;
        next: string | null;
        option: string | null;
        prev: string | null;
        result: string | null;
    }

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

    console.log(groupedOptions);

    return (
        <View>
            {Object.keys(groupedOptions).map((key) => {
                return (
                    <View key={key}>
                        {groupedOptions[key].map((option: Option) => {
                            return (
                                <Pressable key={option.option}>
                                    <Text>{option.option}</Text>
                                </Pressable>
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
}
