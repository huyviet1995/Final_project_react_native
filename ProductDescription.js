import React, {Component} from 'react';
import {TouchableHighlight,StyleSheet, View, Text, Image} from 'react-native';

export class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const img_source = {
      uri: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjn78n7iYvgAhWIMd4KHQrpCX4QjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fen%2Fphotos%2Fshopping%2520mall%2F&psig=AOvVaw3jWG6lrSsccTvrUJeI1WxH&ust=1548579403389296"
    } 
    return (
      <TouchableHighlight onPress = {this.props.productOnPress} style = {styles.container}>
      <View>
        <Image source = {img_source} style = {styles.img}/>
        <Text style = {styles.product_name}>{this.props.name}</Text>
        <Text style = {styles.product_price}>{this.props.price}</Text>
       </View>
      </TouchableHighlight>
    )
  }
   
}

const styles = StyleSheet.create({
  container: {
    height: 150, 
    width: 150,
    flex: 1,
    margin: 4,
    justifyContent: 'space-around',
    backgroundColor: "skyblue",
  },
  product_name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  product_price: {
    fontSize: 30,
    fontWeight: "bold",
  }
})