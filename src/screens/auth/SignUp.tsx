import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/textinput/TextInput'
import Buttons from '../../components/buttons/Buttons'


const SignUp = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={{ gap: 20 }}>
                <Input label='Name' />
                <Input label='Email' />
                <Input label='Password' />
                <Input label='Confirm Password' />
                <Buttons text={'Sign Up'} press={() => console.log("Sign Up Pressed")} />
            </View>
            <View style={{ width: "90%", alignSelf: 'center', gap: 10, alignItems: 'center' }}>
                
                <Text onPress={() =>navigation.navigate("Login") }>Already have an account!</Text>
            </View>
        </View>
    )
}

export default SignUp

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