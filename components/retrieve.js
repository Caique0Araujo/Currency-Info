import AsyncStorage from '@react-native-async-storage/async-storage';

const retrive = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key, (error, result)=>{
        if(error){
            console.log(error);
        }
      });
      if (value !== null) {
          return value;
      }
    } catch (error) {
      console.log(error);
    }
  };

export default retrive;