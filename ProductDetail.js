import React, {Component} from 'react';
import {Button, StyleSheet, View, Text, Image} from 'react-native';
import * as firebase from 'firebase';
import {database} from './Firebase.js';

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uid: null,
      name: "Product name",
      price: "Product price",
      quantity: "Product quantity",
      description: "Product description",
      image: "https://vignette.wikia.nocookie.net/austinally/images/1/14/Random_picture_of_shark.png/revision/latest?cb=20150911004230",
    }
  }

  _addToCard = () => {
    const user_uid = this.state.user_uid;
    const table_ref = database.ref("/user_basket");
    console.log("Product Detail: " + user_uid);
    const chosen_product = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      quantity: this.state.quantity,
      image: this.state.image,
    };
    table_ref.child(user_uid).push(chosen_product).then((data) => {
      console.log("Adding a new product");
      console.log(data);
    }).catch((error) => {
      console.log('error ' + error);
    })
    // Set the value of the table ref again
  }

  async componentDidMount() {
    const item = this.props.navigation;
    this.setState({
      user_uid: item.getParam("user_uid"),
      name: item.getParam("name"),
      price: item.getParam("quantity"),
      quantity: item.getParam("price"),
      description: item.getParam("description"),
      image: item.getParam("image"),
    })
  }

  render() {
    return (
      <View>
        <Image source = {{uri: this.state.image}} style = {styles.img} />
        <Text>{this.state.name}</Text>
        <Text>{this.state.price}</Text>
        <Text>{this.state.quantity}</Text>
        <Text>{this.state.description}</Text>
        <Button title = {"add to card"} style = {styles.button} onPress = {this._addtocard}/>
        <Button title = {"View Basket"} style = {styles.button} onPress = {() => this.props.navigation.navigate("Checkout",{
          user_uid: this.state.user_uid,
        })}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
  },
  img: {
    width: "100%",
    height: 200,
  }
})