// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as firebase from 'firebase';

export class SignUp extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      email: "",
      password: "",
      current_user: null,
    }    
  }

  _onCreateGoTo = () => {
    this.props.navigation.navigate("ProductList");
  }

  _handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(this._onCreateGoTo).catch(error => this.setState({errorMessage: error.message}));
  }

  render() {
      return (
        <View style={styles.container}>
          <Text style = {styles.mainText}> Sign Up</Text>
          {this.state.errorMessage &&
            <Text>
              {this.state.errorMessage}
            </Text>}
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(email) => this.setState({email: email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(password) => this.setState({password: password})}
            value={this.state.password}
          />
          <Button title="Sign Up" onPress={this._handleSignUp} style = {styles.button} />
          <Text> Already has an account? </Text>
          <Button
            style = {styles.button}
            title = "Login"
            onPress={() => this.props.navigation.navigate('Login')}/>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    mainText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    textInput: {
      paddingLeft: 10,
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    },
    errorMessage: {
      color: "red",
    },
    button: {
      backgroundColor: "blue",
      padding: 3, 
    }
  })