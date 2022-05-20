import { DevSettings, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';



export default function LoginScreen({navigation}) {

  /*if(true)
    DevSettings.reload();*/

    return (
      <View style={styles.container}>
        <Image source={require('../assets/CurrencyInfo.jpg')} style={{ width: 200, height: 200 }}/>
          <Text style={{
            fontSize: 20,
            fontWeight: '800',
            width: '85%',
            padding: 5,
            textAlign: 'center',
          }}>
          Welcome to CurrencyInfo! Please, make login to coninue.
        </Text>
        <View style={{width: '100%', height: 200, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
          <View style={styles.viewLogin}>
            <Text style={{color: '#e6c98c', fontSize: 18, fontWeight: '500'}}>Login</Text>
          </View>
          <View style={{width: '85%', height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={styles.bttnLoginFacebook}>
              <Text style={{color: '#EDEDED', fontSize: 18, fontWeight: '500'}}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bttnLoginGoogle} onPress={()=>navigation.navigate('Tabs')}>
              <Text style={{color: '#EDEDED', fontSize: 18, fontWeight: '500'}}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EDEDED',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    bttnLoginGoogle: {
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: '45%',
      height: 50,
      marginBottom: 10,
      borderRadius: 35,
      borderWidth: 3,
      borderColor: '#e6c98c',
    },
    bttnLoginFacebook: {
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: '45%',
      height: 50,
      marginBottom: 10,
      borderRadius: 35,
      borderWidth: 3,
      borderColor: '#e6c98c',
    },
    viewLogin: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: '80%',
      height: 50,
      borderBottomRadius: 10,
      borderBottomWidth: 3,
      borderBottomColor: '#e6c98c',
    },
  });