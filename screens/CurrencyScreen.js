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

const [value, setValue] = useState(0);
const [currency, setCurrency]= useState('Dollar');

    return (

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 40, fontWeight: '300', top: -50 }}>
            Conversão de moedas
          </Text>
          <Text style={{fontSize: 17, fontWeight: '800', marginTop: 10}}>
            Escolha a moeda e digite o valor que quiser converter.
          </Text>
        </View>
          <View style={styles.bodyContainer}>
            <View style={styles.textContainer}>
              <Text style = {styles.name}>
                Valor do Real em {currency}:
              </Text>
              <Text style = {styles.value}>
                R$: {value}
              </Text>
            </View>
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
              <Picker.Item label="Dollar" value='Dollar'/>
              <Picker.Item label="Euro" value="Euro"/>
            </Picker>
            <View style={{
                bottom: -60,
                position: 'absolute',
                width: 100,
                height: 100,
                borderRadius: 70,
                backgroundColor: 'rgb(238, 238, 238)',
            }}></View>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      fontFamily: 'Roboto',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    bodyContainer: {
      backgroundColor: '#e6c98c',
      width: '90%',
      bottom: 100,
      height: 400,
      alignItems: 'center',
      borderRadius: 25

    },
    textContainer: {
      width: '80%',
      justifyContent: 'flex-start',
      marginTop: 30,
      marginBottom: 30
    },
    headerContainer: {
      alignItems: 'flex-start',
      padding: 20,
      left: 0,      
      right: 0,
      height: 250,
      width: '90%',
      top: -50

  },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: 'transparent',
      backgroundColor: 'white',
      marginBottom: 20,
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    name: {
      fontWeight: '300',
      fontSize: 15
    },
    value: {
      fontSize: 40,
      fontWeight: '400'
    },
    picker: {
      width: '80%',
      height: 30,
      backgroundColor: '#FFF0E0',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    },
  });