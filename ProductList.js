import React, {Component} from 'react';
import {Button, FlatList, View, Text, StyleSheet} from 'react-native';
import {ProductDescription} from './ProductDescription';
import {database} from './Firebase.js';
import {firebase} from 'firebase'

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      products: [],
      loading: false,
    }
    this.loadMore = this.loadMore.bind(this);
    this.fetched_products = this.fetchProducts.bind(this);
    this._getCurrentUser = this._getCurrentUser.bind(this);
  }

  _keyExtractor = (item) => {
    item.id;
  }

  _getCurrentUser = () => {
    console.log("Current User is here!");
    const {current_user} = firebase.auth().currentUser;
    this.setState({current_user: current_user}); 
  } 

  _goToCreateNewProduct = () => {
    this.props.navigation.navigate("CreateNewProduct");
  }

  _productOnPress =({item}) => {
    this.props.navigation.navigate("ProductSummary", {
      product_name: item.product_name,
      product_price: item.product_price,
      product_description: item.product_description,
      product_quantity: item.product_quantity, 
    });
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
    this._getCurrentUser;
    console.log(this.state.current_user);
    console.log("Products should be fetched correctly!");
    this.fetchProducts();
  }

  render() {
    console.log("Product to be displayed!");
    return (
      <FlatList style = {styles.container}
        horizontal = {true}
        data = {this.state.products} 
        keyExtractor = {(item) => {item.id}}
        renderItem = {({item}) => <ProductDescription id = {item.id} name = {item.product_name} quantity = {item.product_quantity} price = {item.product_price} productOnPress = {this._productOnPress({item})} />}
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