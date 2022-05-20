import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Main from './navigation/Main';



const MyTheme = {
  dark: false,
  colors: {
    primary: '#3C3C3C',
    background: '#EDEDED',
    card: '#E1BD5E',
    text: '#3C3C3C',
    border: 'transparent',
    notification: '#d4d4d4',
  },
};



const App = () => {

  if(false){
  return ( 
    <NavigationContainer theme={MyTheme}>
      <Tabs />
    </NavigationContainer>
  );
  }else{
    return(
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    );
  }
}

export default App;