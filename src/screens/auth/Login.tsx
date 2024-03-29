import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/textinput/TextInput'
import Buttons from '../../components/buttons/Buttons'


const Login = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={{ gap: 20 }}>
                <Input label='Email' />
                <Input label='Password' />
                <Buttons text={'Login'} press={() => console.log("login Pressed")} />
            </View>
            <View style={{ width: "90%", alignSelf: 'center', gap: 10, alignItems: 'center' }}>
                <Text onPress={() =>navigation.navigate("ForgotPassword") }>Forgot Password?</Text>
                <Text onPress={() => navigation.navigate("SignUp")}>Don't have an account?</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: '#fdf6eb',
        // alignItems:'center'
    },
    input: {
        width: "90%",
        // justifyContent:'center'
    }
})