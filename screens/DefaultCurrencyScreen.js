import { StyleSheet, Text, View} from 'react-native';

import CurrencyCard from '../components/CurrencyCard';


const cardDollar = {
  name:'Dollar', 
  value: 'R$ 400',
  image: require('../assets/dollar.png')
}

const cardEuro = {
  name:'Euro', 
  value: 'R$ 500',
  image: require('../assets/euro.png')
}

const cardYen = {
  name:'Yen', 
  value: 'R$ 200',
  image: require('../assets/yen.png')
}

const cardReal = {
  name:'Real', 
  value: 'R$ 200',
  image: require('../assets/brl.png')
}

const cardPound = {
  name:'Pound', 
  value: 'R$ 200',
  image: require('../assets/pound.png')
}

export default function DefaultCurrencyScreen() {
    return (
      <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text style={{fontSize: 20, fontWeight: '300', padding: 10, width: '90%', top: 20}}>
              Escolha a moeda para ser padrão.
            </Text>
                
                <View style={styles.cardsContainer}>
                    <CurrencyCard objeto={cardReal}/>
                    <CurrencyCard objeto={cardEuro}/>
                    <CurrencyCard objeto={cardYen}/>
                    <CurrencyCard objeto={cardPound}/>
                    <CurrencyCard objeto={cardDollar}/>
                </View>
            </View>
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
    bodyContainer: {
      marginTop: '5%',
      width: '100%',
      flex: 1,
      alignItems: 'center'
  },
  cardsContainer: {
    marginTop: '10%',
    width: '100%',
    flex: 1,
    alignItems: 'center'

},
  });