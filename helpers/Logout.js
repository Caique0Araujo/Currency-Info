import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

const Logout = ({navigation}) => {


    useEffect(() => {
      async function clearData(){
        await AsyncStorage.removeItem('name');
        await AsyncStorage.removeItem('email');
      }
      clearData();
    }, []);

    return navigation.navigate("Decider");


}

export default Logout;