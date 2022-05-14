import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function SettingsScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>

        </View>
            <TouchableOpacity style={styles.bttn} onPress={()=>navigation.navigate('DefaultCurrency')}>
                <Text style={{textAlign: "center",
                color: 'white',
                fontSize: 20, }}>
                    Moeda Padrão
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bttn} onPress={()=>navigation.navigate('HomeCurrency')}>
                <Text style={{textAlign: "center",
                color: 'white',
                fontSize: 20, }}>
                    Moedas do inicio
                </Text>
            </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgContainer: {
      backgroundColor: 'red',
      width: 300,
      height: 300,
      borderRadius: 15,
      marginBottom: '4em',
    },
    bttn: {
      backgroundColor: '#37280B',
      width: '40%',
      padding: '0.5em',
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: 'transparent',
      marginTop: '1em',
      
  }
  });