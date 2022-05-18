import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useState} from 'react';



function convert(value, currency){
  if(currency === 'Dollar'){
    const dollarvalue = 5.06;
    return value * dollarvalue;
  }
  
  if(currency === 'Euro'){
    const euroValue = 5.25;
    return value * euroValue;
  }

}


export default function CurrencyScreen() {

const [value, setValue] = useState('');
const [currency, setCurrency]= useState('');

    return (

      <View style={styles.container}>
          <Text style = {styles.name}>
            Valor do Real em {currency}:
          </Text>
          <Text style = {styles.value}>
            R$: {value}
          </Text>
          <TextInput
            style={[styles.input, styles.shadowProp]}
            keyboardType="numeric"
            onChangeText={(text)=>{
              
              setValue(convert(text, currency));
            }}
          />
          <Picker 
          style={styles.picker}
          selectedValue={currency}
          onValueChange={(itemValue, itemIndex)=>{
            setCurrency(itemValue)
            setValue(0);
          }
          }
          >
            <Picker.Item label="Dollar" value="Dollar"/>
            <Picker.Item label="Euro" value="Euro"/>
          </Picker>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      fontFamily: 'Roboto',
      width: '100%',
      height: '100%',
      padding: 1,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 30,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: 'transparent',
      backgroundColor: 'white'
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    name: {
      fontWeight: '500',
      fontSize: 30
    },
    value: {
      fontSize: 20
    },
    picker: {
      width: 200,
      height: 30,
      backgroundColor: '#FFF0E0',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    },
  });