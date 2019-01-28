import React, {Component} from 'react';
import {TouchableHighlight,StyleSheet, View, Text, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';

export class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img_source = {
      uri: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjn78n7iYvgAhWIMd4KHQrpCX4QjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fen%2Fphotos%2Fshopping%2520mall%2F&psig=AOvVaw3jWG6lrSsccTvrUJeI1WxH&ust=1548579403389296"
    } 
    console.log(this.props.pressHere);
    return (
      <TouchableHighlight style = {styles.container} onPress = {this.props.pressHere}> 
        <View>
        <Image source = {img_source} style = {styles.img}/>
        <View style = {styles.info}>
          <Text style = {styles.product_name}>{this.props.name}</Text>
          <Text style = {styles.product_price}>{this.props.price}</Text>
        </View>
        </View>
      </TouchableHighlight>
    )
  }
   
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderWidth: 1,
    margin: 2,
  },
  info: {
    alignItems: 'center',
  },
  img: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  product_price: {
    color: "red",
    fontWeight: "bold",
  }
})