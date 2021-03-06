import React, {Component} from 'react';
import {Button, Text,StyleSheet, View, Image, TextInput} from 'react-native';
import firebase from 'firebase';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uid: null,
      email: "nc@gmail.com",
      password: "123456",
      errorMessage: null,
    }
    this._navigateTo = this._navigateTo.bind(this);
  }

  _navigateTo = () => {
    const user_uid = firebase.auth().currentUser.uid;
    console.log("loggin in!");
    console.log(user_uid);
    this.props.navigation.navigate("ProductList",{
      user_uid: user_uid,
    });
  }

  handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(this._navigateTo).catch(error => this.setState({errorMessage: error.message}));
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.mainText}>Login!</Text>
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
    alignItems: "center",
  },
  container: { 
    flex: 1, 
    backgroundColor: "white",
  },
  textInput: {
    paddingLeft: 10,
    backgroundColor: "white",
    fontSize: 15,
    margin: 10,
    borderColor: "black",
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: "blue",
    width: 100,
    height: 50,
  }
})