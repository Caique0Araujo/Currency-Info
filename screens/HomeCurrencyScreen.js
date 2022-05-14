import { StyleSheet, Text, View} from 'react-native';


export default function HomeCurrencyScreen() {
    return (
      <View style={styles.container}>
          <Text>Escolher moeda da página inicial</Text>
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