import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface ButtonProps {
    text: string;
    press: () => void
}
const Buttons = ({ text, press }: ButtonProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableButton} onPress={press}>
                <Text style={styles.text}>{text}</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    touchableButton: {
        width: "90%",
        backgroundColor: "#5FBDFF",
        alignItems: "center",
        borderRadius: 8,
        padding: 10
    },
    text: {
        fontWeight: "bold",
        color: "#fff"
    }
})