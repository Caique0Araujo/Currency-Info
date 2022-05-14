import { StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import CurrencyCard from '../components/CurrencyCard';
import { TouchableOpacity } from 'react-native-web';
import { DrawerContent } from '../components/DrawerContent';



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


function ScreenContent({navigation}){
    return(

        <View style={styles.container}>
            <Text style={styles.defaultText}>Bem vindo ao CurrencyInfo!!</Text>
            <Text style={styles.currencyText}>Valor da moeda Real:</Text>
            <CurrencyCard objeto={cardDollar}/>
            <CurrencyCard objeto={cardEuro}/>
            <CurrencyCard objeto={cardYen}/>
            <TouchableOpacity style={styles.bttn} onPress={()=>navigation.navigate('Currency')}>
                <Text style={{textAlign: "center",
                color: 'white',
                fontSize: 20, }}>
                    Converter valores
                </Text>
            </TouchableOpacity>
        </View>
        //<Button title="Converter moeda" onPress={ ()=> navigation.navigate('Currency') } />
    );
}





const Drawer = createDrawerNavigator();


export default function HomeScreen({navigation}) {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerTintColor: '#3C3C3C',
            headerStyle: {
              backgroundColor: '#E1BD5E'
            }
        }} drawerContent={props => <DrawerContent {... props} />}>
            <Drawer.Screen name="Página inicial" component={ScreenContent} />
            <Drawer.Screen name="Configurações" component={SettingsScreen} />
            <Drawer.Screen name="Sobre" component={AboutScreen} />
        </Drawer.Navigator>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        
      fontFamily: 'Roboto',
      width: '100%',
      height: '100%',
      padding: '1em',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    defaultText: {
        fontWeight: '300',
        fontSize: 25,
        marginBottom: '0.5em',
    },
    currencyText: {
        fontWeight: '500',
        fontSize: 25,
        marginBottom: '1.0em'
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