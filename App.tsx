import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/SignUp';
import StackNavigator from './src/navigator/StackNavigator';
import LottieView from 'lottie-react-native';


export default function App() {



  return (
    <SafeAreaView style={styles.container}>
     <StackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fdf6eb',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
