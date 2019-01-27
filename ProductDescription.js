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
    return (
      <Card height = {200} width = {200}> 
        <Image source = {img_source} style = {styles.img}/>
        <Text style = {styles.product_name}>{this.props.name}</Text>
        <Text style = {styles.product_price}>{this.props.price}</Text>
        <View style = {styles.buttons}>
          <Button style = {styles.button} title = {"View Details"} onPress = {() => this.props.navigation.navigate("ProductDetail")}/>
          <Button style = {styles.button} title = {"Add To Basket"} onPress = {() => this.props.navigation.navigate("Checkout")}/>
        </View>
      </Card>
    )
  }
   
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 150, 
    width: 150,
    flex: 1,
    margin: 4,
    backgroundColor: "skyblue",
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
  button: {
    margin: 4,
    width: 20,
    height: 15,
    backgroundColor: "blue",
  } 
})