import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import './navigation/stack';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#3C3C3C',
    background: 'rgb(238, 238, 238)',
    card: '#E1BD5E',
    text: '#3C3C3C',
    border: 'transparent',
    notification: '#d4d4d4',
  },
};



const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;