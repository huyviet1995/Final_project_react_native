import React, {Component} from 'react';
import {Text,View, StyleSheet, Image, InputText} from 'react-native';

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
    }
  }

  componentDidMount = async() => {
    const {current_user} = firebase.auth();
    this.setState({current_user: current_user});
  }

  render() {
    return (
      <Text>Hello World</Text>
    )
  }

}