import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import CurrencyCard from '../components/CurrencyCard';
import { SafeAreaView, StatusBar, Image } from 'react-native';



const cardDollar = {
    name:'Dollar', 
    value: 'R$ 400',
    image: 'logo-usd'
}

const cardEuro = {
    name:'Euro', 
    value: 'R$ 500',
    image: 'logo-euro'
}

const cardYen = {
    name:'Yen', 
    value: 'R$ 200',
    image: 'logo-yen'
}





export default function HomeScreen({navigation}) {

    return (
        <SafeAreaView style={[styles.container, styles.shadow]}>
            <StatusBar/>
            <View style={[styles.headerContainer, styles.shadow]}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.imgContainer}>
                        <Image source={require('../assets/accountDefault.png')} style={{tintColor: '#748c94'}}></Image>
                    </TouchableOpacity>
                    <Text style={{fontSize: 13, color: '#748c94', left: 13, bottom: 7}}>UserName</Text>
                </View>
                <Text style={styles.defaultText}>Welcome to CurrencyINFO@</Text>
            </View> 
            <View style={styles.bodyContainer}>
                <View style={styles.currencyContainer}>
                    <Image source={require('../assets/accountDefault.png')} style={{tintColor: 'white'}} ></Image>
                    <Text style={styles.currencyText}>Valor da moeda Real:</Text>
                </View>
                <View style={styles.cardsContainer}>
                    <CurrencyCard objeto={cardDollar}/>
                    <CurrencyCard objeto={cardEuro}/>
                    <CurrencyCard objeto={cardYen}/>
                </View>
            </View>
        </SafeAreaView>
        
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
    headerContainer: {
        backgroundColor: 'white',
        padding: 20,
        top: 0,
        left: 0,      
        right: 0,
        height: 160,
        width: '100%',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    bodyContainer: {
        marginTop: '10%',
        width: '100%',
        flex: 1,
        alignItems: 'center'
    },
    defaultText: {
        textAlign: 'center',
        top: 5,
        fontWeight: '300',
        fontSize: 20,
    },
    currencyText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 23,
        textAlign: 'center',
        left: 5

    }, 
    imgContainer: {
        width: 48,
        height: 48,
        borderRadius: 35,
        
    },
    cardsContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center'

    },
    currencyContainer: {
        padding: 10,
        backgroundColor: 'rgba(252, 194, 36, 0.6)',
        width: 330,
        borderRadius: 28,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderColor: '#748c94'

    }


  });

  /*
  
  container 

  backgroundColor: 'white',
        position: 'absolute',
        bottom: 100,
        left: 20,      
        right: 20,
        height: 700,
        elevation: 0,
  
        borderRadius: 15,
  
  
  */ 