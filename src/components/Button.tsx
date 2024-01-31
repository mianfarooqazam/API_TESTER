import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// Types
interface ButtonProps {
    text: string;
    press: ()=>void;
}
const Button = ({text,press}:ButtonProps) => {
  return (
    <TouchableOpacity  style={styles.touchableButton} onPress={press}>

        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    touchableButton: {
        width:"90%",
        backgroundColor:"#5FBDFF",
        borderRadius:10,
        padding:10,
        alignItems:'center',

    },
    text: {
        fontWeight:"bold",
        color:"#ffff"
    }
})