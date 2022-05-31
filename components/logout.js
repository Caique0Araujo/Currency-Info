import { useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Decider from './decider';

const Logout = ({navigation}) => {


    useEffect(() => {
      async function clearData(){
        await AsyncStorage.clear();
      }
      clearData();
    }, [])
    
    return <Decider/>;


}

export default Logout;