import React, {Component} from 'react';
import {TouchableHighlight,StyleSheet, View, Text, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';

export class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.pressHere);
    return (
      <TouchableHighlight onPress = {this.props.pressHere}> 
      <View style = {styles.container}>
        <Image source = {{uri: this.props.product_image}} style = {styles.img}/>
        <View style = {styles.info}>
          <Text style = {styles.product_name}>{this.props.name}</Text>
          <Text style = {styles.product_price}>{this.props.price}</Text>
          <Text style = {styles.description}>{this.props.product_description}</Text>
          </View>
      </View>
      </TouchableHighlight>
    )
  }
   
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 150,
    borderWidth: 1,
    margin: 2,
  },
  img: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    marginLeft: 3,
  },
  product_price: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15, 
  },
  product_name: {
    fontSize: 15,
    fontWeight: "bold",
  }
})