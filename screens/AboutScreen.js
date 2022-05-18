import { StyleSheet, Text, View} from 'react-native';


export default function AboutScreen() {
    return (
      <View style={[styles.container, styles.shadow]}>
          <Text>Sobre</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 120,
      left: 20,      
      right: 20,
      height: '80%',
      elevation: 0,

      borderRadius: 15,
    },
    shadow: {
      shadowColor: '#7F5DF8',
      shadowOffset: {
          width: 0,
          height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
  }
  });