import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from './screens/AboutScreen';
import CurrencyScreen from './screens/CurrencyScreen';
import DefaultCurrency from './screens/DefaultCurrencyScreen';
import HomeCurrencyScreen from './screens/HomeCurrencyScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';


const MyTheme = {
  dark: false,
  colors: {
    primary: '#3C3C3C',
    background: '#F8F8F8',
    card: '#E1BD5E',
    text: '#3C3C3C',
    border: 'transparent',
    notification: '#d4d4d4',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="About" component={AboutScreen} options={{title: "Sobre"}}/>
        <Stack.Screen name="Currency" component={CurrencyScreen} options={{title: "Converter Moeda"}}/>
        <Stack.Screen name="DefaultCurrency" component={DefaultCurrency} options={{title: "Moeda padrão"}}/>
        <Stack.Screen name="HomeCurrency" component={HomeCurrencyScreen} options={{title: "Moedas da página inicial"}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: "Login"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
