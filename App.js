import React from 'react';
import {Button,StyleSheet, Text, View} from 'react-native';
import {database} from './Firebase.js'
import {AppContainer} from './AppContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_price: 0,
    }
  }


  goToAddProduct = () => {
    this.props.navigation.navigate("AddProduct");
  }

  render() {
    return (
      <AppContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: 'red'
  }
});
