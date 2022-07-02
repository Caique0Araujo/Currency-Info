import { StyleSheet, Text, View, Image} from 'react-native';
import { ImageBackground } from 'react-native';


export default function AboutScreen() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={[styles.container]}>
          <Image source={require('../assets/CurrencyInfo.png')} style={{width: 200, height: 200, borderRadius: 20, top: 30}}/>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                CurrencyInfo é um aplicativo desenvolvido por Caique Araújo para a disciplina de 
                Tópicos Especiais em desenvolvimento para dispositivos móveis.
              </Text>
            </View>
        </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%", 
      height: "100%", 
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    shadow: {
      shadowColor: '#37280B',
      shadowOffset: {
          width: 0,
          height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
  },
    textContainer: {
      width: '95%',
      minHeight: '40%',
      justifyContent: 'center',
      alignItems: 'center',
      top: 40
    },
    text: {
      color: '#fff',
      fontWeight: '800',
      fontSize: 25,
    }
  });