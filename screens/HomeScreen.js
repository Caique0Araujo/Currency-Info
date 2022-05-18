import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import CurrencyCard from '../components/CurrencyCard';




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
        <View style={[styles.container, styles.shadow]}>
            <Text style={styles.defaultText}>CurrencyINFO@</Text>
            <Text style={styles.currencyText}>Valor da moeda Real:</Text>
            <CurrencyCard objeto={cardDollar}/>
            <CurrencyCard objeto={cardEuro}/>
            <CurrencyCard objeto={cardYen}/>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 120,
        left: 20,      
        right: 20,
        height: '80%',
        elevation: 0,
  
        borderRadius: 15,
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
    defaultText: {
        fontWeight: '300',
        fontSize: 25,
    },
    currencyText: {
        fontWeight: '500',
        fontSize: 25,
    }, 


  });