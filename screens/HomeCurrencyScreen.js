import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from "react-native";
import { useState, useEffect } from "react";
import store from "../components/store";
import retrive from '../components/retrieve';

async function storeData(key, name) {
  await store(key, name);
}

export default function HomeCurrencyScreen({ navigation }) {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [currency3, setCurrency3] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  

  useEffect(() => {
    async function retrieveData() {
      const c1 = await retrive("currency1");
      const c2 = await retrive("currency2");
      const c3 = await retrive("currency3");

      setCurrency1('Real');
      setCurrency2('Real');
      setCurrency3('Real');

      if(c1) setCurrency1(c1);
      if(c2) setCurrency2(c2);
      if(c3) setCurrency3(c3);
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
            selectedValue={currency1}
            value={currency1}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency1(itemValue);
              storeData("currency1", itemValue);
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
            value={currency2}
            onValueChange={(itemValue, itemIndex) => {
              setCurrency2(itemValue);
              storeData("currency2", itemValue);
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
            value={currency3}
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
            storeData("currency1", currency1);
            storeData("currency2", currency2);
            storeData("currency3", currency3);
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
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  bodyContainer: {
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
