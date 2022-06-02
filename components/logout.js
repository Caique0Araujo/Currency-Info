import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Text } from 'react-native';


const Logout = ({navigation}) => {


    useEffect(() => {
      async function clearData(){
        await AsyncStorage.removeItem('name');
        await AsyncStorage.removeItem('email');
      }
      clearData();
    }, []);

}

export default Logout;