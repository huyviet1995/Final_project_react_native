import React, {Component} from 'react';
import {Button, TextInput, View, Text, StyleSheet, Image} from 'react-native';
import {database} from './Firebase.js'

export class CreateNewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "Enter Product Name",
      product_price: "Enter product price",
      product_quantity: "Enter product quantity",
      product_description: "Enter product description",
    }
  }

  createNewProduct = () => {
    const table_path = "/products";
    const table_ref = database.ref(table_path);
    const new_product = {
      product_name: this.state.product_name,
      product_price: this.state.product_price,
      product_quantity: this.state.product_quantity
    };
    table_ref.push(new_product).then((data) => {
      console.log("Creating a new product");
      console.log(data);
    }).catch((error) => {
      console.log('error ' + error);
    })
  }



  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          style = {styles.textInput}
          placeholder = {"Enter product name"}
          onChangeText = {(text) => this.setState({product_name: text})}/>
        <TextInput
          style = {styles.textInput}
          placeholder = {"Enter product price"}
          onChangeText = {(text) => this.setState({product_price: text})}/>
        <TextInput
          style = {styles.textInput}
          placeholder = {"Enter product quantity"}
          onChangeText = {(text) => this.setState({product_quantity: text})}/>
        <Button title = {"Creating a new product"} onPress = {this.createNewProduct}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
  },
  textInput: {
    paddingLeft: 10,
    justifyContent: "space-between",
    alignItems: 'stretch',
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "blue",
    width: 40,
    height: 30,
  }
})