import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import user from "../database/user.json"
const homePage = (props) => {
console.log(infolist);
    return (
        <View style={styles.containerStyle}>
            <Text>{infolist}</Text>
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
export default homePage;