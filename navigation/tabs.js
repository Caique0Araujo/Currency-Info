import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import AboutScreen from "../screens/AboutScreen";
import CurrencyScreen from "../screens/CurrencyScreen";
import HomeScreen from "../screens/HomeScreen";
import Logout from "../helpers/Logout";
import Context from "../context/context";
import { useContext } from "react";
import { LogBox } from "react-native";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 75,
          height: 75,
          borderRadius: 45,
          backgroundColor: "#fff",
          ...styles.shadow,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const LogoutButton = ({ children, navigation }) => {
  const [authenticated, setAuthenticated] = useContext(Context);

  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        async function clearData() {
          await AsyncStorage.removeItem("name");
          await AsyncStorage.removeItem("email");
        }
        clearData();
        setAuthenticated(null);
        navigation.replace("Decider");
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: "#e6c98c",
          borderRadius: 20,
          height: 80,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#fff" : "#000",
                  }}
                />
                <Text
                  style={{ color: focused ? "#fff" : "#000", fontSize: 12 }}
                >
                  Início
                </Text>
              </View>
            );
          },
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Stack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/settings.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#fff" : "#000",
                  }}
                />
                <Text
                  style={{ color: focused ? "#fff" : "#000", fontSize: 12 }}
                >
                  Opções
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Currency"
        component={CurrencyScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../assets/currencyChange.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "#E1BD5E",
                }}
              />
            );
          },
          tabBarButton: (props) => {
            return <CustomTabBarButton {...props} />;
          },
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/info.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#fff" : "#000",
                  }}
                />
                <Text
                  style={{ color: focused ? "#fff" : "#000", fontSize: 12 }}
                >
                  Sobre
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/accountSettings.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#fff" : "#000",
                  }}
                />
                <Text
                  style={{ color: focused ? "#fff" : "#000", fontSize: 12 }}
                >
                  Sair
                </Text>
              </View>
            );
          },
          tabBarButton: (props) => {
            return <LogoutButton {...props} navigation={navigation} />;
          },
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#37280B",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
