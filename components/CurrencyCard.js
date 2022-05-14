import { StyleSheet, Text, View, Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';

export default function CurrencyCard(props){
    return (
        <TouchableOpacity style={[styles.container, styles.shadowProp] }>
                <View style = {styles.subcontainer}>
                    <Ionicons style = {styles.tinyLogo} name={props.objeto.image} size={64}></Ionicons>
                    <View style = {{ flexDirection: 'column', padding: 10, flex: 1, marginLeft: '1em' }}>
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
      maxWidth: '70%',
      backgroundColor: 'white',
      marginBottom: '1em'
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