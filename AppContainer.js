import React, {Component} from 'react';
import {Button,View, Text, StyleSheet} from 'react-native';
import {ProductDetail} from './ProductDetail';
import {ProductList} from './ProductList';
import {CreateNewProduct} from './CreateNewProduct';
import {createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {SignUp} from './auth/Signup.js'; import {Login} from './auth/Login.js';
import {Checkout} from './Checkout';

const AuthFlow = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: ({navigation}) => ({
      title: "Welcome to my final project",
    })
  },

  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: "Login"
    }),
  }
});

const MainList = createStackNavigator({
  ProductList: {
    screen: ProductList,
    navigationOptions: ({navigation}) => ({
      title: "Product List",
    })
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam("name"),
    }),
  },
},{
  initialRouteName: "ProductList",
});

const MainFlow = createBottomTabNavigator({
  MainScreen: MainList,
  CreateNewProduct: {
    screen: CreateNewProduct,
    navigationOptions: ({navigation}) => ({
      user_uid: navigation.getParam("user_uid"),
      headerLeft: {
        title: "New Product",
      }
    })
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: ({navigation}) => ({
      user_uid: navigation.getParam("user_uid"),
      headerLeft: {
        title: "New Product",
      }
    })
  }
}, {
  initialRouteName: "MainScreen",
});

const MainContainer = createStackNavigator({
  AuthFlow: AuthFlow,
  MainFlow: MainFlow,
},{
  initialRouteName: "AuthFlow",
  navigationOptions: {
    headerVisible: false,
  }
})

export const AppContainer = createAppContainer(MainContainer);