import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Tabs from './tabs';
import IndexScreen from '../screens/IndexScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "#3C3C3C",
    background: "#EDEDED",
    card: "#E1BD5E",
    text: "#3C3C3C",
    border: "transparent",
    notification: "#d4d4d4",
  },
};

export default function Main(){
    return(
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="IndexScreen" component={IndexScreen}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="Tabs" component={Tabs}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}