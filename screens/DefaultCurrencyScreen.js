import { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import CurrencyCard from "../components/CurrencyCard";
import store from "../helpers/Store";

const cardDollar = {
  name: "Dollar",
  value: 50,
  image: require("../assets/dollar.png"),
};

const cardEuro = {
  name: "Euro",
  value: 100,
  image: require("../assets/euro.png"),
};

const cardYen = {
  name: "Iene",
  value: 200,
  image: require("../assets/yen.png"),
};

const cardReal = {
  name: "Real",
  value: 300,
  image: require("../assets/brl.png"),
};

const cardPound = {
  name: "Libra",
  value: 200,
  image: require("../assets/pound.png"),
};


async function setCurrency(name, symbol){
  await storeData('defaultCurrencyName', name);
  await storeData('defaultCurrencySymbol', symbol);
}


async function storeData(key, name){
  await store(key, name);
}

export default function DefaultCurrencyScreen() {

  const [defaultCurrency, setDefaultCurrency] = useState({});
  const [modalVisible, setModalVisible] = useState(false);


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
          Escolha a moeda para ser padrão.
        </Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={{width: '100%', alignItems: 'center'}} onPress={async ()=>{
            await setCurrency('Real', 'brl');
            setModalVisible(true);
            
          }}>
            <CurrencyCard objeto={cardReal} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: '100%', alignItems: 'center'}} onPress={async ()=>{
            await setCurrency('Euro', 'eur');

            setModalVisible(true);

          }}>
            <CurrencyCard objeto={cardEuro} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: '100%', alignItems: 'center'}} onPress={async ()=>{

            await setCurrency('Iene', 'jpy');

            setModalVisible(true);
          }}>
            <CurrencyCard objeto={cardYen} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: '100%', alignItems: 'center'}} onPress={async ()=>{

            await setCurrency('Libra', 'gbp');

            setModalVisible(true);
          }}>
            <CurrencyCard objeto={cardPound} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: '100%', alignItems: 'center'}} onPress={async function pqp(){

            await setCurrency('Dolar', 'usd');

            setModalVisible(true);
          }
          }>
           <CurrencyCard objeto={cardDollar} />
          </TouchableOpacity>

        </View>
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
              <Text style={styles.modalText}>Moeda padrão trocada com sucesso!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
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
  bodyContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  cardsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },modalView: {
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
});
