import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CurrencyCard from "../components/CurrencyCard";
import { SafeAreaView, StatusBar, Image } from "react-native";
import Context from "../context/context";
import { useContext, useEffect, useState } from "react";
import retrive from "../components/retrieve";
import getExchangeValues from "../repositories/getExchangeValues";

export default function HomeScreen() {
  const [authenticated] = useContext(Context);

  const [defaultCurrency, setDefaultCurrency] = useState({
    name: "Real",
    symbol: "brl",
  });

  const [currency1, setCurrency1] = useState({ name: "Dollar", symbol: "usd" });
  const [currency2, setCurrency2] = useState({ name: "Euro", symbol: "eur" });
  const [currency3, setCurrency3] = useState({ name: "Libra", symbol: "gbp" });

  const [rates, setRates] = useState({});

  useEffect(() => {
    async function retrieveData() {
      const currencyName = await retrive("defaultCurrencyName");
      const currencySymbol = await retrive("defaultCurrencySymbol");

      const c1Name = await retrive("currency1Name");
      const c2Name = await retrive("currency2Name");
      const c3Name = await retrive("currency3Name");

      const c1Symbol = await retrive("currency1Symbol");
      const c2Symbol = await retrive("currency2Symbol");
      const c3Symbol = await retrive("currency3Symbol");

      let data;

      if (currencyName && currencySymbol){
        setDefaultCurrency({ name: currencyName, symbol: currencySymbol });
        data = await getExchangeValues(currencySymbol);

      }else{
        data = await getExchangeValues(defaultCurrency.symbol);

      }

      if (c1Name && c1Symbol) setCurrency1({ name: c1Name, symbol: c1Symbol });
      if (c2Name && c2Symbol) setCurrency2({ name: c2Name, symbol: c2Symbol });
      if (c3Name && c3Symbol) setCurrency3({ name: c3Name, symbol: c3Symbol });


      setRates(data);

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
            Valor da moeda {defaultCurrency.name}:
          </Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.cardsContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CurrencyCard
              objeto={{
                name: currency1.name,
                value: rates[currency1.symbol],
                image: require(`../assets/dollar.png`),
              }}
            />
            <CurrencyCard
              objeto={{
                name: currency2.name,
                value: rates[currency2.symbol],
                image: require("../assets/dollar.png"),
              }}
            />
            <CurrencyCard
              objeto={{
                name: currency3.name,
                value: rates[currency3.symbol],
                image: require("../assets/dollar.png"),
              }}
            />
            <Text></Text>
          </ScrollView>
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
    top: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
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
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    minWidth: "40%",
    minHeight: "20%"
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
  scrollView: {
    width: "100%",
    height: 350,
  },
});

