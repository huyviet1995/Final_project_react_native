import React, {Component} from 'react';
import {Button, Text,StyleSheet, View, Image, TextInput} from 'react-native';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null,
    }
  }

  handleLogin = () => {
    alert.alert("Logging in");
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text >Login!</Text>
        {this.state.errorMessage &&
        <Text>{this.state.errorMessage}</Text>}
        <View>
          <TextInput
            style = {styles.textInput}
            placeholder = {"Email"}
            onChangeText = {(email) => this.setState({email: email})} 
            value = {this.state.email}
           />
          <TextInput
            style = {styles.textInput}
            secureTextEntry = {true}
            placeholder = {"Password"}
            onChangeText = {(password) => this.setState({password: password})} 
            value = {this.state.password}
           />
          </View>
            <Button
              style = {styles.button}
              title = {"Log In"}
              onPress = {this.handleLogin}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
  },
  container: { 
    flex: 1, 
    backgroundColor: "white",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "white",
    fontSize: 15,
    margin: 30,
    borderColor: "black",
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: "blue",
    width: 100,
    height: 50,
  }
})