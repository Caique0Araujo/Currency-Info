import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from "react-native";
import { useState, useEffect } from "react";
import store from "../components/store";
import retrive from '../components/retrieve';

async function storeData(key, name) {
  await store(key, name);
}

export default function HomeCurrencyScreen({ navigation }) {
  const [currency1, setCurrency1] = useState({name:"Dollar", symbol: "usd"});
  const [currency2, setCurrency2] = useState({name:"Euro", symbol: "eur"});
  const [currency3, setCurrency3] = useState({name:"Libra", symbol: "gbp"});
  const [modalVisible, setModalVisible] = useState(false);

  

  useEffect(() => {
    async function retrieveData() {
      const c1Name = await retrive("currency1Name");
      const c2Name = await retrive("currency2Name");
      const c3Name = await retrive("currency3Name");


      const c1Symbol = await retrive("currency1Symbol");
      const c2Symbol = await retrive("currency2Symbol");
      const c3Symbol = await retrive("currency3Symbol");

      setCurrency1({name:'Real', symbol: 'brl'});
      setCurrency2({name:'Real', symbol: 'brl'});
      setCurrency3({name:'Real', symbol: 'brl'});

      if(c1Name) setCurrency1({name: c1Name, symbol: c1Symbol});
      if(c2Name) setCurrency2({name: c2Name, symbol: c2Symbol});
      if(c3Name) setCurrency3({name: c3Name, symbol: c3Symbol});
    }
    retrieveData();
  }, []);

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
            selectedValue={currency1.name}
            value={{name: currency1.name, symbol: currency1.symbol}}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency1({name: itemValue.name, symbol: itemValue.symbol});
              console.log(itemValue)

            }}
          >
            <Picker.Item label="Real" value={{name: 'Real', symbol: 'brl'}} />
            <Picker.Item label="Dollar" value={{name: 'Dolar', symbol: 'usd'}} />
            <Picker.Item label="Libra" value={{name: 'Libra', symbol: 'gbp'}}/>
            <Picker.Item label="Yen" value={{name: 'Iene', symbol: 'jpy'}} />
            <Picker.Item label="Euro" value={{name: 'Euro', symbol: 'eur'}} />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={currency2.name}
            value={{name: currency2.name, symbol: currency2.symbol}}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency2({name: itemValue.name, symbol: itemValue.symbol});

            }}
          >
            <Picker.Item label="Real" value={{name: 'Real', symbol: 'brl'}} />
            <Picker.Item label="Dollar" value={{name: 'Dolar', symbol: 'usd'}} />
            <Picker.Item label="Libra" value={{name: 'Libra', symbol: 'gbp'}}/>
            <Picker.Item label="Yen" value={{name: 'Iene', symbol: 'jpy'}} />
            <Picker.Item label="Euro" value={{name: 'Euro', symbol: 'eur'}} />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={currency3.name}
            value={{name: currency3.name, symbol: currency3.symbol}}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency3({name: itemValue.name, symbol: itemValue.symbol});


            }}
          >
            <Picker.Item label="Real" value={{name: 'Real', symbol: 'brl'}} />
            <Picker.Item label="Dollar" value={{name: 'Dolar', symbol: 'usd'}} />
            <Picker.Item label="Libra" value={{name: 'Libra', symbol: 'gbp'}}/>
            <Picker.Item label="Yen" value={{name: 'Iene', symbol: 'jpy'}} />
            <Picker.Item label="Euro" value={{name: 'Euro', symbol: 'eur'}} />
          </Picker>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Moedas trocadas com sucesso!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.bttn}
          onPress={() => {
            storeData("currency1Name", currency1.name);
            storeData("currency1Symbol", currency1.symbol);
            storeData("currency2Name", currency2.name);
            storeData("currency2Symbol", currency2.symbol);
            storeData("currency3Name", currency3.name);
            storeData("currency3ymbol", currency3.symbol);
            setModalVisible(true);
          }}
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
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  bodyContainer: {
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
  },
  picker: {
    width: "80%",
    height: 30,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardsContainer: {
    marginTop: "10%",
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
    elevation: 3, // Android
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
