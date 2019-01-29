import React, {Component} from 'react';
import {FlatList, Text,View, StyleSheet, Image, InputText} from 'react-native';

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uid: null,
      loading: true,
    }
    this._fetchUserProducts = this._fetchUserProducts.bind(this);
  }

  _fetchUserProducts = () => {
    console.log("Hello World");
    this.setState({
      loading: true,
    })
    const table_ref = database.ref(`/user_basket/${this.state.user_uid}`);
    let fetched_products = [];
    table_ref.on('value',(snapshot) => {
      products_list = snapshot.val();
      for (var key in products_list) {
        fetched_products.push(products_list[key]);
        fetched_products[fetched_products.length-1]["id"] = key;
      }
      console.log("Here is the fetched products");
      console.log(fetched_products);
      this.setState({
        products: fetched_products,
        loading: false,
      })
    });
  }

  componentDidMount = async() => {
    console.log("Here is the navigation!");
    console.log(this.props.navigation);
    console.log("Here is the get Param of the navigation!");
    console.log(this.props.navigation.getParam);
    const user_uid = this.props.navigation.getParam("user_uid"); 
    console.log(user_uid);
    this.setState({user_uid: user_uid});
    this._fetchUserProducts
  }

  render() {
    return (
      <FlatList style = {styles.container}
        horizontal = {true}
        data = {this.state.products} 
        keyExtractor = {(item) => {item.id}}
        renderItem = {({item}) => <ProductDescription id = {item.id} name = {item.product_name} quantity = {item.product_quantity} price = {item.product_price} pressHere = {() => this._onPressGoTo({item})} />}
        refreshing = {this.state.loading}
        onRefresh = {() => this.loadMore()}/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    backgroundColor: "skyblue",
  },
  testView: {
    width: "100%",
    height: "100%",
    backgroundColor: 'red',
  }
});