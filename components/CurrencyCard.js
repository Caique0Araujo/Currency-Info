import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function CurrencyCard(props){
    return (
        <TouchableOpacity style={[styles.container, styles.shadow] }>
                <View style = {styles.subcontainer}>
                    <Ionicons style = {styles.tinyLogo} name={props.objeto.image} size={64}></Ionicons>
                    <View style = {{ flexDirection: 'column', padding: 10, flex: 1 }}>
                        <Text style = {styles.name}>{props.objeto.name}</Text>
                        <Text style = {styles.value}>{props.objeto.value}</Text>
                    </View>
                </View>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: 'transparent',
      width: '100%',
      maxWidth: '90%',
      backgroundColor: 'white',
      top: 30,
      marginBottom: 20,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
  },
    name: {
        fontWeight: '500',
        fontSize: 30
    },
    value: {
      fontSize: 20
    },

    subcontainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    tinyLogo: {
      width: 64,
      height: 64,
      borderRadius: 50,
    },
    
    
  });