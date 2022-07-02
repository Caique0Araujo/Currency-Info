import React, { useState, useEffect } from "react";
import Context from "./context/context";
import Decider from "./helpers/Decider";
import retrive from "./helpers/Retrieve";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Theme from "./utilities/Theme";

const Stack = createNativeStackNavigator();

const App = () => {
  const [authenticated, setAuthenticated] = useState({});

  useEffect(() => {
    async function fetchData() {
      const email = await retrive("email");
      const name = await retrive("name");
      setAuthenticated({ email: email, name: name });
    }
    fetchData();
  }, []);

  return (
    <Context.Provider value={[authenticated, setAuthenticated]}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#e6c98c",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "400",
            },
          }}
        >
          <Stack.Screen
            name="Decider"
            component={Decider}
            options={{ title: "Decider" }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
