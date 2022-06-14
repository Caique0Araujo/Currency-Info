import React, { useState, useEffect } from "react";
import Context from './context/context';
import Decider from "./components/decider";
import retrive from "./components/retrieve";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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


const App = () => {

  const [authenticated, setAuthenticated] = useState({});


  useEffect(() => {
    async function fetchData(){
      const email = await retrive('email');
      const name = await retrive('name');
      setAuthenticated({email: email, name: name});

    }
    fetchData();
    
  }, []);


    return (
      <Context.Provider value={[authenticated, setAuthenticated]}>
        <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: '#e6c98c',
              },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '400',
              },
        }}>
          <Stack.Screen name="Decider" component={Decider} options={{title: "Decider"}}>

          </Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    );
};

export default App;
