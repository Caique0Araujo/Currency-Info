
import DefaultCurrencyScreen from '../screens/DefaultCurrencyScreen';
import HomeCurrencyScreen from '../screens/HomeCurrencyScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Stacks = () =>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="DefaultCurrency" component={DefaultCurrencyScreen} options={{title: "Moeda padrão"}}/>
            <Stack.Screen name="HomeCurrency" component={HomeCurrencyScreen} options={{title: "Moedas da página inicial"}}/>
        </Stack.Navigator>
    );
}

export default Stacks;