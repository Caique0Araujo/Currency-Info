import AsyncStorage from '@react-native-async-storage/async-storage';


const store = async (key, data) =>{
  try {
    await AsyncStorage.setItem(
      key,
      data, 
        (error)=>{
        if(error){
            console.log(error);
        }
      }
    );
  } catch (error) {
    console.log(error)
  }
}

export default store;