import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import restart from 'react-native-restart';

import AboutScreen from '../screens/AboutScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import HomeScreen from '../screens/HomeScreen';
import Logout from '../components/logout';

import Stacks from './stack';

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


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
    return(
        <TouchableOpacity
        style={{
            top: -40,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View style={{
            width: 80,
            height: 80,
            borderRadius: 45,
            backgroundColor: '#fff',
            ...styles.shadow

            
        }}>
        
            {children}  
        </View>
    </TouchableOpacity>
    );
    
}

const Tabs = () =>{
    return(
        <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#e6c98c",
                    borderRadius: 15,
                    height: 80,
                    ...styles.shadow

                }
            }}
        >
            <Tab.Screen name ='Home' component={HomeScreen} options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fff' : '#000'
                            }}
                        />
                        <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>Início</Text>
                    </View>
                    );
                }
            }}/>
            
            <Tab.Screen name ='Settings' component={Stacks} options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/settings.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fff' : '#000'
                            }}
                        />
                        <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>Opções</Text>
                    </View>
                    );
                }
            }}/>
            <Tab.Screen name = 'Currency' component={CurrencyScreen} options={{
                tabBarIcon: ({focused}) => {
                    return(
                        
                        <Image 
                        source={require('../assets/currencyChange.png')}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#E1BD5E'
                        }}
                    />
                    );
                },
                tabBarButton: (props)=>{
                    return (<CustomTabBarButton{...props}/>);
                }
            }}/>
            <Tab.Screen name ='About' component={AboutScreen} options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/info.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fff' : '#000'
                            }}
                        />
                        <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>Sobre</Text>
                    </View>
                    );
                }
            }}
            />
            <Tab.Screen name ='LoginScreen' component={Logout} options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/accountSettings.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#fff' : '#000'
                            }}
                        />
                        <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>Sair</Text>
                    </View>
                    );
                }
            }}/>

        </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#37280B',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;