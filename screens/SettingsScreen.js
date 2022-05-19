import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default function SettingsScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer, styles.shadow]}>
          <Text style={styles.defaultText}>Configurações</Text>
        </View>
        
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
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    headerContainer: {
      backgroundColor: '#e6c98c',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      padding: 20,
      top: 0,
      left: 0,      
      right: 0,
      height: 70,
      width: '100%',
  },
  shadow: {
    shadowColor: '#37280B',
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 10
},
    imgContainer: {
      backgroundColor: 'red',
      width: 300,
      height: 300,
      borderRadius: 15,
      marginTop: '20%',
      marginBottom: '20%',

    },
    bttn: {
      backgroundColor: '#37280B',
      width: '40%',
      padding: 0.5,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: 'transparent',
      
  },
  defaultText: {
    color: 'white',
    textAlign: 'center',
    top: 30,
    fontWeight: '400',
    fontSize: 20,
},
  });