import { StyleSheet, Text, View} from 'react-native';


export default function DefaultCurrencyScreen() {
    return (
      <View style={styles.container}>
          <Text>Escolher moeda padrão</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });