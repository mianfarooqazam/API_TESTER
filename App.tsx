import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/auth/Login';



export default function App() {



  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
