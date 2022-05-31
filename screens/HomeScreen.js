import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CurrencyCard from "../components/CurrencyCard";
import { SafeAreaView, StatusBar, Image } from "react-native";
import Context from "../context/context";
import { useContext, useEffect, useState } from "react";
import retrive from "../components/retrieve";

export default function HomeScreen({ navigation }) {
  const [authenticated] = useContext(Context);
  const [defaultCurrency, setDefaultCurrency] = useState("");
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [currency3, setCurrency3] = useState("");

  useEffect(() => {
    async function retrieveData() {
      const data = await retrive("defaultCurrency");
      const c1 = await retrive("currency1");
      const c2 = await retrive("currency2");
      const c3 = await retrive("currency3");
      setDefaultCurrency(data);
      setCurrency1(c1);
      setCurrency2(c2);
      setCurrency3(c3);
    }
    retrieveData();
  }, []);

  return (
    <SafeAreaView style={[styles.container, styles.shadow]}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "100%" }}
        >
          <TouchableOpacity style={styles.imgContainer}>
            <Image
              source={require("../assets/accountDefault.png")}
              style={{ tintColor: "#fff" }}
            ></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 13, color: "#fff", left: 13, bottom: 7 }}>
            {authenticated?.name}
          </Text>
        </View>
        <Text style={styles.defaultText}>Welcome to CurrencyINFO@</Text>
        <View style={[styles.currencyContainer, styles.shadow]}>
          <Image
            source={require("../assets/accountDefault.png")}
            style={{ tintColor: "white" }}
          ></Image>
          <Text style={styles.currencyText}>
            Valor da moeda {defaultCurrency}:
          </Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.cardsContainer}>
          <CurrencyCard
            objeto={{
              name: currency1,
              value: "R$ 200",
              image: require(`../assets/dollar.png`),
            }}
          />
          <CurrencyCard
            objeto={{
              name: currency2,
              value: "R$ 200",
              image: require("../assets/dollar.png"),
            }}
          />
          <CurrencyCard
            objeto={{
              name: currency3,
              value: "R$ 200",
              image: require("../assets/dollar.png"),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  shadow: {
    shadowColor: "#37280B",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 10,
  },
  headerContainer: {
    backgroundColor: "#e6c98c",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    width: "100%",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  bodyContainer: {
    marginTop: "10%",
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  defaultText: {
    color: "white",
    textAlign: "center",
    top: 30,
    fontWeight: "400",
    fontSize: 20,
  },
  currencyText: {
    color: "white",
    fontWeight: "500",
    fontSize: 23,
    textAlign: "center",
    left: 5,
  },
  imgContainer: {
    width: 48,
    height: 48,
    borderRadius: 35,
  },
  cardsContainer: {
    marginTop: "10%",
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  currencyContainer: {
    bottom: -80,
    padding: 10,
    backgroundColor: "#f5d071",
    width: 360,
    borderRadius: 5,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
  
  container 

  backgroundColor: 'white',
        position: 'absolute',
        bottom: 100,
        left: 20,      
        right: 20,
        height: 700,
        elevation: 0,
  
        borderRadius: 15,
  
  
  */
