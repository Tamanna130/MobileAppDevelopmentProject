import React, { useState } from "react";
import ListScreen from "./ListScreen";
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from "react-native"

function loginPage(props) {
    // console.log(props);
    const [values, setValue] = useState({
        username: "",
        password: ""
    });
    return (
        <View style={styles.containerStyle}>
            <View style={styles.ViewStyle}>
                <Image style={styles.imageStyle} source={require('../../assets/images.png')} />
            </View>
            <TextInput placeholder="Username" value={values.username} onChangeText={(e) => { setValue({ ...values, username: e }) }} style={styles.inputStyle} />
            <TextInput placeholder="Password" value={values.password} onChangeText={(e) => { setValue({ ...values, password: e }) }} style={styles.inputStyle} />
            <View style={styles.buttonStyle}>
                {/* <Button style={styles.buttonBorderStyle} title="Login"></Button> */}
            </View>
            <TouchableOpacity
                style={styles.button}
                // onPress={this.onPress}
                onPress={() => {
                    
                    props.navigation.navigate("Home");
                }}
            >
                <Text> Touch Here </Text>
            </TouchableOpacity>

            {/* <View>
                <Text>Name: </Text>
                <TextInput value={"Tamanna Shermin"}></TextInput>
            </View>
            <View>
                <Text>ID: </Text>
                <TextInput value={"011201130"}></TextInput>
            </View>
            <Button title="Login"></Button> */}
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: 120,
        width: 120,

    },
    inputStyle: {
        backgroundColor: 'white',
        color: 'white',
        fontSize: 20,
        color: 'black',
        height: 50,
        borderWidth: .5,
        // height: 40,
        width: 250,
        paddingLeft: 15,
        marginTop: 20,
        borderRadius: 25,
    },
    containerStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'purple',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 250,
        marginTop: 20,

    },
    buttonBorderStyle: {
        borderRadius: 14,
        backgroundColor: 'white',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 25,
        width: 250,
        color: 'white',
    }

});
export default loginPage;