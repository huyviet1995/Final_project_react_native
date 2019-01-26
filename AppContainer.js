import React, {Component} from 'react';
import {Button,View, Text, StyleSheet} from 'react-native';
import {ProductDetail} from './ProductDetail';
import {ProductList} from './ProductList';
import {CreateNewProduct} from './CreateNewProduct';
import {createAppContainer, StackNavigator, createStackNavigator, createTabNavigator} from 'react-navigation';

export const AppContainer = createAppContainer(createStackNavigator({

  ProductList: {
    screen: ProductList,
    navigationOptions: ({navigation}) => ({
      title: "List of Products",
      headerRight: (
        <Button 
          onPress = {() => navigation.navigate("CreateNewProduct")}
          title = {"Create new product"}
          color = {"skyblue"}
        />
      )
    })
  },

  CreateNewProduct: {
    screen: CreateNewProduct,
    navigationOptions: () => ({
      title: "Create a new products",
    }),
  },

  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: () => ({
      title: "Detail of the product",
    }),
  },
}));