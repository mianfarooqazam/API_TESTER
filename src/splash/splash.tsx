import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react'
import LottieView from "lottie-react-native";



const Splash = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <LottieView
        source={require("./splash.json")}
        autoPlay
        loop={false}
        speed={4}
        onAnimationFinish={() => {
          navigation.navigate("Login");
        }}
      ></LottieView>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Splash;