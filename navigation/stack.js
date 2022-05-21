
import DefaultCurrencyScreen from '../screens/DefaultCurrencyScreen';
import HomeCurrencyScreen from '../screens/HomeCurrencyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Stacks(){
    return(
        
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#e6c98c',
              },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '400',
              },
        }}>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: 'Configurações', headerShown: false,}}/>
            <Stack.Screen name="DefaultCurrency" component={DefaultCurrencyScreen} options={{title: "Moeda padrão"}}/>
            <Stack.Screen name="HomeCurrency" component={HomeCurrencyScreen} options={{title: "Moedas da página inicial"}}/>
        </Stack.Navigator>
    );
}
