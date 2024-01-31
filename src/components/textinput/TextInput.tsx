import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, HelperText } from 'react-native-paper';
interface TextInputProps {
    label: string
}
const Input = ({ label }: TextInputProps) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textinput} mode='outlined' label={label} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },

    textinput: {
        width: "90%",

    }
})