import React, {Component} from 'react';
import {Button,View, Text, StyleSheet} from 'react-native';
import {ProductDetail} from './ProductDetail';
import {ProductList} from './ProductList';
import {CreateNewProduct} from './CreateNewProduct';
import {createAppContainer, createStackNavigator, } from 'react-navigation';
import {SignUp} from './auth/Signup.js'; import {Login} from './auth/Login.js';
import {Checkout} from './Checkout';

export const AppContainer = createAppContainer(createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: ({navigation}) => ({
      title: "Welcome",
    })
  },

  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: "Login",
    })
  },

  Checkout: {
    screen: Checkout,
    navigationOptions: ({navigation}) => ({
      title: "Your Basket",
    })
  },

  ProductList: {
    screen: ProductList,
    navigationOptions: ({navigation}) => ({
      title: "Product List",
    })
  },

  CreateNewProduct: {
    screen: CreateNewProduct,
    navigationOptions: ({navigation}) => ({
      title: "Create a new products",
    }),
  },

  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam("name"),
    }),
  },
},{
  initialRouteName: "SignUp",
}
));