import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';
import ForgotPassword from '../screens/auth/ForgotPassword';
import HomeScreen from '../screens/HomeScreen';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false, }}/>
   
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false, }}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator