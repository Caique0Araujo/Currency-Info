import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import retrive from "../helpers/Retrieve";
import getExchangeValues from "../repositories/getExchangeValues";


function convert(value, currency, rate) {

  if (currency === "Dollar") {
    const dollarvalue = rate['usd'];
    return value * dollarvalue;
  }

  if (currency === "Euro") {
    const euroValue = rate['eur'];
    return value * euroValue;
  }

  if(currency === "Real"){
    const realValue = rate['brl'];
    return value * realValue;
  }

  if(currency === "Pound"){
    const poundValue = rate['gbp'];
    return value * poundValue;
  }

  if(currency === "Yen"){
    const yenValue = rate['jpy'];
    return value * yenValue;
  }
  
}


const data = {
  "name": "Real", "symbol": "brl"
}



export default function CurrencyScreen() {

  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState("Dollar");
  const [defaultCurrency, setDefaultCurrency] = useState(data);
  const [rates, setRates] = useState({});

  useEffect(() => {
    async function retrieveData() {
      const currencyName = await retrive("defaultCurrencyName");
      const currencySymbol = await retrive("defaultCurrencySymbol");

      let data;

      if (currencyName && currencySymbol){
        setDefaultCurrency({ name: currencyName, symbol: currencySymbol });
        data = await getExchangeValues(currencySymbol);

      }else{
        data = await getExchangeValues(defaultCurrency.symbol);

      }

      setRates(data);


    }
    retrieveData();
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 40, fontWeight: "300", top: -50 }}>
          Conversão de moedas
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "800",  top: -50 }}>
          Escolha a moeda e digite o valor que quiser converter.
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Valor da moeda {defaultCurrency.name} em {currency}:</Text>
          <Text style={styles.value}>R$: {value}</Text>
        </View>
        <TextInput
          style={[styles.input, styles.shadowProp]}
          keyboardType="numeric"
          onChangeText={(value) => {
            setValue(convert(value, currency, rates));
          }}
        />
        <Picker
          style={styles.picker}
          selectedValue={currency}
          onValueChange={(itemValue, itemIndex) => {
            setCurrency(itemValue);
            setValue(0);
          }}
        >
          <Picker.Item label="Real" value="Real" />
          <Picker.Item label="Euro" value="Euro" />
          <Picker.Item label="Yen" value="Yen" />
          <Picker.Item label="Dollar" value="Dollar" />
          <Picker.Item label="Pound" value="Pound" />
        </Picker>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  bodyContainer: {
    backgroundColor: "#e6c98c",
    width: "92%",
    minHeight: "40%",
    maxHeight: "60%",
    top: 10,
    alignItems: "center",
    borderRadius: 25,

  },
  textContainer: {
    width: "80%",
    justifyContent: "flex-start",
    marginTop: 30,
    marginBottom: 30,
  },
  headerContainer: {
    marginBottom: 40,
    alignItems: "flex-start",
    padding: 20,
    left: 0,
    right: 0,
    height: 250,
    width: "90%",
    top: '10%',
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "transparent",
    backgroundColor: "white",
    marginBottom: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  name: {
    fontWeight: "300",
    fontSize: 15,
  },
  value: {
    fontSize: 40,
    fontWeight: "400",
  },
  picker: {
    width: "80%",
    height: 30,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});
