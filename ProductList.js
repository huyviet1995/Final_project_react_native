import React, {Component} from 'react';
import {Button, FlatList, View, Text, StyleSheet} from 'react-native';
import {ProductDescription} from './ProductDescription';
import {database} from './Firebase.js';

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
    }
    this.loadMore = this.loadMore.bind(this);
    this.fetched_products = this.fetchProducts.bind(this);
  }

  _keyExtractor = (item) => {
    item.id;
  }


  _goToCreateNewProduct = () => {
    this.props.navigation.navigate("CreateNewProduct");
  }

  _productOnPress =({item}) => {
    this.props.navigation.navigate("ProductSummary", {
      product_name: item.name,
      product_price: item.price,
      product_description: item.description,
      product_quantity: item.quantity, 
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
    console.log("Products should be fetched correctly!");
    this.fetchProducts();
  }

  render() {
    console.log("Product to be displayed!");
    return (
      <FlatList style = {styles.container}
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
    backgroundColor: "blue",
  },
  testView: {
    width: "100%",
    height: "100%",
    backgroundColor: 'red',
  }
});