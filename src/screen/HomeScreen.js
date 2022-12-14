import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native"
var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
function myHomeScreen(props) {

    const a = "../../assets/dp.png"
    var base64str = base64_encode(a);
    console.log(a);
    return (
        <View style={styles.containerStyle}>
            <Image style={{ height: 120, width: 120, }} source={'../../assets/dp.png'} />
            <View style={styles.content}>
                <Text id='1' style={styles.textStyles}>{props.route.params.id}</Text>
                <Text id='1' style={styles.textStyles}>{props.route.params.username}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        borderWidth: 1,
        borderStyle: "dotted",
        padding: 20

    }
});
export default myHomeScreen;