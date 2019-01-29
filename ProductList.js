import React, {Component} from 'react';
import {Button, FlatList, View, Text, StyleSheet} from 'react-native';
import {ProductDescription} from './ProductDescription';
import {database} from './Firebase.js';
import {firebase} from 'firebase';

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uid: null,
      products: [],
      loading: false,
    }
    this.loadMore = this.loadMore.bind(this);
    this.fetched_products = this.fetchProducts.bind(this);
    this._getCurrentUser = this._getCurrentUser.bind(this);
    this._onPressGoTo = this._onPressGoTo.bind(this);
  }

  _keyExtractor = (item) => {
    item.id;
  }

  _getCurrentUser = () => {
    const user_uid = this.props.navigation.getParam("user_uid");
    console.log("Here is the user uid");
    console.log(user_uid);
    this.setState({
      user_uid: user_uid,
    });
  } 

  _goToCreateNewProduct = () => {
    this.props.navigation.navigate("CreateNewProduct");
  }


  loadMore = async () => {
    console.log("New products are being fetched!");
    await this.fetchProducts;
  }

  fetchProducts = async () => {
    this.setState({
      loading: true,
    })
    const table_ref = database.ref("/products");
    let fetched_products = [];
    table_ref.on('value',(snapshot) => {
      products_list = snapshot.val();
      for (var key in products_list) {
        fetched_products.push(products_list[key]);
        fetched_products[fetched_products.length-1]["id"] = key;
      }
      this.setState({
        products: fetched_products,
        loading: false,
      })
    });
  }

  async componentDidMount() {
    this._getCurrentUser();
    console.log(this.state.user_uid);
    this.fetchProducts();
  }

  _onPressGoTo = ({item}) => {
    this.props.navigation.navigate("ProductDetail", {
      user_uid: this.state.user_uid,
      name: item.product_name,
      quantity: item.product_quantity,
      price: item.product_price,
      description: item.product_description,
    }); 
  } 

  render() {
    return (
      <FlatList style = {styles.container}
        horizontal = {true}
        data = {this.state.products} 
        keyExtractor = {(item) => {item.id}}
        renderItem = {({item}) => <ProductDescription id = {item.id} name = {item.product_name} quantity = {item.product_quantity} price = {item.product_price} pressHere = {() => this._onPressGoTo({item})} />}
        refreshing = {this.state.loading}
        onRefresh = {() => this.loadMore()}
      />
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