import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Context from "../context/context";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect, useContext } from "react";
import Store from '../components/store';


WebBrowser.maybeCompleteAuthSession();

export default function  LoginScreen( ) {


  const [authenticated, setAuthenticated] = useContext(Context);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "631546079521-gan0u86e7vmonk8iera0lmrmkb88dbnq.apps.googleusercontent.com",
    androidClientId:
      "631546079521-9q6c1pde5s1rvu7r49n67paqpnaaevr3.apps.googleusercontent.com",
    webClientId:
      "631546079521-gan0u86e7vmonk8iera0lmrmkb88dbnq.apps.googleusercontent.com",
  });

  useEffect(() => {
    
    if (response?.type === "success") {
      const { authentication } = response;
      async function fetchLogin(){
        await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + authentication.accessToken,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
  
            return response.json();
          })
          .then(async (json) => {
            await Store('email', json.email);
            await Store('name', json.name);
            setAuthenticated({email: json.email, name: json.name});
            
          });

      }
      fetchLogin();
    }
  }, [response]);


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/CurrencyInfo.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "800",
          width: "85%",
          padding: 5,
          textAlign: "center",
        }}
      >
        Welcome to CurrencyInfo! Please, make login to coninue.
      </Text>
      <View
        style={{
          width: "100%",
          height: 200,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View style={styles.viewLogin}>
          <Text style={{ color: "#e6c98c", fontSize: 18, fontWeight: "500" }}>
            Login
          </Text>
        </View>
        <View
          style={{
            width: "85%",
            height: 100,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={styles.bttnLoginGoogle}
            onPress={() => promptAsync()}
          >
            <Text style={{ color: "#EDEDED", fontSize: 18, fontWeight: "500" }}>
              Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDEDED",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bttnLoginGoogle: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "45%",
    height: 50,
    marginBottom: 10,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#e6c98c",
  },
  bttnLoginFacebook: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "45%",
    height: 50,
    marginBottom: 10,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#e6c98c",
  },
  viewLogin: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "80%",
    height: 50,
    borderBottomRadius: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#e6c98c",
  },
});
