import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, styles.shadow]}>
        <Image
          source={require("../assets/settings.png")}
          resizeMode="contain"
          style={{ tintColor: "#fff", width: 36, height: 36 }}
        />
        <Text style={styles.defaultText}>Configurações</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/SettingsPick.jpg")}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => navigation.navigate("DefaultCurrency")}
      >
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
          Moeda Padrão
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => navigation.navigate("HomeCurrency")}
      >
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
          Moedas do inicio
        </Text>
      </TouchableOpacity>
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
  headerContainer: {
    backgroundColor: "#e6c98c",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    width: "100%",
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
  imgContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "90%",
    height: 300,
    borderRadius: 15,
    marginBottom: 5,
  },
  bttn: {
    backgroundColor: "#E1BD5E",
    justifyContent: "center",
    alignContent: "center",
    width: "80%",
    height: 60,
    padding: 10,
    borderColor: "#E1BD5E",
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 20,
    elevation: 3, // Android
  },
  defaultText: {
    color: "white",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
    marginLeft: 15,
  },
});
