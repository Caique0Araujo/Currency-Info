import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default function IndexScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/CurrencyInfo.jpg')} style={{ width: 200, height: 200, top: '35%' }}/>
        <View style={{width: '100%', height: 200, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>

          <TouchableOpacity style={styles.bttnLogin} onPress={()=>navigation.navigate('LoginScreen')}>
            <Text style={{color: '#EDEDED', fontSize: 18, fontWeight: '500'}}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity><Text>By Caique Araújo</Text></TouchableOpacity>

        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EDEDED',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bttnLogin: {
      backgroundColor: '#e6c98c',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: '80%',
      height: 50,
      marginBottom: 10,
      borderRadius: 35,
      borderWidth: 3,
      borderColor: '#e6c98c',
    },
    bttnRegister: {
      backgroundColor: '#EDEDED',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: '80%',
      height: 50,
      marginBottom: 10,
      borderRadius: 35,
      borderWidth: 3,
      borderColor: '#e6c98c',
    },
  });