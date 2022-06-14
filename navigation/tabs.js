import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import AboutScreen from '../screens/AboutScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import HomeScreen from '../screens/HomeScreen';
import Logout from '../components/logout';

import Stacks from './stack';


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
            width: 70,
            height: 70,
            borderRadius: 45,
            backgroundColor: '#fff',
            ...styles.shadow

            
        }}>
        
            {children}  
        </View>
    </TouchableOpacity>
    );
    
}


const LogoutButton = ({children}) => {
    return(
        <TouchableOpacity
        style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={()=>{
            async function clearData(){
                await AsyncStorage.removeItem('name');
                await AsyncStorage.removeItem('email');
              }
              clearData();
        }}
    >
        <View style={{
            width: 70,
            height: 70,
            
        }}>
        
            {children}  
        </View>
    </TouchableOpacity>
    );
    
}

const Tabs = () =>{
    return(
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
                    height: '8%',
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
                }, unmountOnBlur: true
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
                }, unmountOnBlur: true
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
            <Tab.Screen name ='Logout' component={Logout} 
                 options={{
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
                    },
                    tabBarButton: (props)=>{
                        return (<LogoutButton{...props}/>);
                    }, unmountOnBlur: true
                }}
            />

        </Tab.Navigator>
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