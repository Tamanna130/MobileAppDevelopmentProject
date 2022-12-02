import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native"

function myHomeScreen(props) {
    // console.log(props);
    return (
        <View style={styles.containerStyle}>
            <Text id='1' style={styles.textStyles}>Hello World :/</Text>
            <Button title="Go to the list screen" onPress={() => {
                console.log("BUtton Working");
                props.navigation.navigate("ListScreen");
            }}></Button>

            <TextInput value={"dhhjsdhjsdhj"}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
export default myHomeScreen;