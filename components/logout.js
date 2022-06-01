import AsyncStorage from '@react-native-async-storage/async-storage';


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