import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/textinput/TextInput'
import Buttons from '../../components/buttons/Buttons'


const ForgotPassword = () => {

    return (
        <View style={styles.container}>
            <View style={{ gap: 20 }}>
                
                <Input label='Enter your Email' />
                <Buttons text={'Receive New Password via Email'} press={() => console.log("Pressed")} />
              
            </View>
           
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor:"#fdf6eb"
        // backgroundColor: 'red',
        // alignItems:'center'
    },
    input: {
        width: "90%",
        // justifyContent:'center'
    }
})