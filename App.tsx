

import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Buttons from './src/components/buttons/Buttons';
import axios from 'axios';



export default function App() {

const getAPI = () => {
  const baseURL = 'https://dummyjson.com'
  axios({
    method:"GET",
    url:`${baseURL}/todos`
  }).then(res => console.log(res)).catch(err => console.log(err))
}


  return (
    <SafeAreaView style={styles.container}>
      <Buttons text={'Get API'} press={getAPI} />
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
