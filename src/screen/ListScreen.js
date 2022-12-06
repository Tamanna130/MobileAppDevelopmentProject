import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const ListScreen = (props) => {
    // console.log(props)
    // const uni_name_1 = 'UIU'
    // const uni_name_2 = 'IUT'
    // const uni_name_3 = 'BUET'
    const unis = [{ name: 'UIU', id: 1 }, { name: 'IUT', id: 2 }, { name: 'BUET', id: 3 }]
    return (
        <View style={styles.containerStyle}>
            <FlatList
                data={unis}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.textStyles}>
                            {item.name}
                        </Text>
                    );
                }}
            />
            {/* <Text style={styles.textStyles}>
                {uni_name_1}
            </Text>
            <Text style={styles.textStyles}>
                {uni_name_2}
            </Text>
            <Text style={styles.textStyles}>
                {uni_name_3}
            </Text> */}

            <Text>{console.log(props.item)}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#d66727'
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    }
});
export default ListScreen;