import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.price}</Text>
        <Text>{this.props.quantity}</Text>
        <Text>{this.props.product_code}</Text>
        <Text>{this.props.description}</Text>
      </View>
    )
  }
  
}