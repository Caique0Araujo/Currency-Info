import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AboutScreen from '../screens/AboutScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import Stacks from './stack';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
    return(
        <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#E1BD5E',
            ...styles.shadow

            
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
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffffff",
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
                                tintColor: focused ? '#E1BD5E' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#E1BD5E' : '#748c94', fontSize: 12}}>Início</Text>
                    </View>
                    );
                }
            }}/>
            
            <Tab.Screen name ='Settings' component={SettingsScreen} options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/settings.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#E1BD5E' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#E1BD5E' : '#748c94', fontSize: 12}}>Opções</Text>
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
                            tintColor: '#fff'
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
                                tintColor: focused ? '#E1BD5E' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#E1BD5E' : '#748c94', fontSize: 12}}>Sobre</Text>
                    </View>
                    );
                }
            }}
            />
            <Tab.Screen name ='LoginScreen' component={LoginScreen} options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/accountSettings.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#E1BD5E' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#E1BD5E' : '#748c94', fontSize: 12}}>Sair</Text>
                    </View>
                    );
                }
            }}/>
        <Tab.Screen name="SettingsOption" component={Stacks} options={{
        tabBarButton: () => null,
        tabBarVisible:false //hide tab bar on this screen

    }} />

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