import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as firebase from 'firebase';
import {database} from '../Firebase.js';

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
    // Create a new user basket first 
    const user_uid = firebase.auth().currentUser.uid;
    const table_ref = database.ref('/user_basket');
    table_ref.child(user_uid).set({
      name: "",
    }).then((data) => {
      console.log("Adding a new user basket");
      console.log(data);
    }).catch((error) => {
      console.log('error ' + error);
    })
    // Then navigate to the product list page.
    this.props.navigation.navigate("ProductList");
  }

  _handleSignUp = () => {
    // Create a new user with that email and password 
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