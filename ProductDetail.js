import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Product name",
      price: "Product price",
      quantity: "Product quantity",
      description: "Product description",
    }
  }

  async componentDidMount() {
    const item = this.props.navigation;
    console.log("Item fetched:");
    console.log(item);
    this.setState({
      name: item.getParam("name"),
      price: item.getParam("quantity"),
      quantity: item.getParam("price"),
      description: item.getParam("description"),
    })
  }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Text>{this.state.price}</Text>
        <Text>{this.state.quantity}</Text>
        <Text>{this.state.description}</Text>
      </View>
    )
  }
  
}