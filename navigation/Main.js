import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Tabs from './tabs';
import IndexScreen from '../screens/IndexScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Main(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="IndexScreen" component={IndexScreen}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="Tabs" component={Tabs}/>
        </Stack.Navigator>
    );
}