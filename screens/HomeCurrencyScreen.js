import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function HomeCurrencyScreen({navigation}) {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [currency3, setCurrency3] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "300",
            padding: 10,
            width: "90%",
            top: 20,
          }}
        >
          Escolha as moedas do ínicio.
        </Text>

        <View style={styles.cardsContainer}>
          <Picker
            style={styles.picker}
            selectedValue={currency1}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency1(itemValue);
            }}
          >
            <Picker.Item label="Real" value="Real" />
            <Picker.Item label="Dollar" value="Dollar" />
            <Picker.Item label="Libra" value="Libra" />
            <Picker.Item label="Yen" value="Yen" />
            <Picker.Item label="Euro" value="Euro" />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={currency2}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency2(itemValue);
            }}
          >
            <Picker.Item label="Real" value="Real" />
            <Picker.Item label="Dollar" value="Dollar" />
            <Picker.Item label="Libra" value="Libra" />
            <Picker.Item label="Yen" value="Yen" />
            <Picker.Item label="Euro" value="Euro" />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={currency3}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency3(itemValue);
            }}
          >
            <Picker.Item label="Real" value="Real" />
            <Picker.Item label="Dollar" value="Dollar" />
            <Picker.Item label="Libra" value="Libra" />
            <Picker.Item label="Yen" value="Yen" />
            <Picker.Item label="Euro" value="Euro" />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.bttn}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  bodyContainer: {
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: 'center'
  },
  picker: {
    width: "80%",
    height: 30,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 50,
  },
  cardsContainer: {
    marginTop: "30%",
    height: 300,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bttn: {
    backgroundColor: "#E1BD5E",
    justifyContent: "center",
    alignContent: "center",
    width: "60%",
    height: 60,
    padding: 10,
    borderColor: "#E1BD5E",
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 20,
    elevation: 3, // Android
  },
});
