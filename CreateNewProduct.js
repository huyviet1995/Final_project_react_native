import React, {Component} from 'react';
import {Button, TextInput, View, Text, StyleSheet, Image} from 'react-native';
import {database} from './Firebase.js'
import {ImagePicker} from 'expo';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export class CreateNewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_image: "https://vignette.wikia.nocookie.net/austinally/images/1/14/Random_picture_of_shark.png/revision/latest?cb=20150911004230",
      product_name: "Enter Product Name",
      product_price: "Enter product price",
      product_quantity: "Enter product quantity",
      product_description: "Enter product description",
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log("New product right here!");
    console.log(result);

    if (!result.cancelled) {
      this.setState({ product_image: result.uri });
    }
  };

  createNewProduct = () => {
    const table_path = "/products";
    const table_ref = database.ref(table_path);
    const new_product = {
      product_image: this.state.product_image, 
      product_name: this.state.product_name,
      product_price: this.state.product_price,
      product_description: this.state.product_description,
      product_quantity: this.state.product_quantity
    };
    table_ref.push(new_product).then((data) => {
      console.log("Creating a new product");
      console.log(data);
      this.props.navigation.navigate("ProductList");
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
        <TextInput
          style = {styles.textInput}
          placeholder = {"Enter product description"}
          onChangeText = {(text) => this.setState({product_description: text})}/>
        <Button title = {"Pick an image"} onPress = {this._pickImage} />
        <Button title = {"Create a new product"} onPress = {this.createNewProduct}/>
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