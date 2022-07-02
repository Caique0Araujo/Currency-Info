import { StyleSheet, Text, View, Image } from 'react-native';

export default function CurrencyCard(props){

    return (
        <View style={[styles.container, styles.shadow] }>
                <View style = {styles.subcontainer}>
                    <Image source= {props.objeto.image} style = {styles.tinyLogo} resizeMode='contain'/>
                    <View style = {{ flexDirection: 'column', padding: 5, flex: 1, marginLeft: '5%' }}>
                        <Text style = {styles.name}>{props.objeto.name}</Text>
                        <Text style = {styles.value}>{props.objeto.value}</Text>
                    </View>
                </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      padding: 5,
      paddingRight: 0,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: 'transparent',
      minWidth: '90%',
      minHeight: '5%',
      backgroundColor: 'white',
      top: 0,
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
        fontSize: 20
    },
    value: {
      fontSize: 10
    },

    subcontainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20

    },
    tinyLogo: {
      width: 30,
      height: 30,
      borderRadius: 25,
    },
    
    
  });