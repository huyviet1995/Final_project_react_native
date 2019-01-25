import React from 'react';
import {Button,StyleSheet, Text, View} from 'react-native';
import {database} from './Firebase.js'
import {AppContainer} from './AppContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_price: 0,
    }
  }

  fetchProducts = (tableName) => {
    const table_path = "/" + tableName; 
    const table_ref = database.ref(table_path);
    table_ref.on('value',(snapshot) => {
      console.log("Read from the database");
      console.log(snapshot.val());
      this.setState({
        product_price: snapshot.val(),
      })
    });
  }


   pushProducts = (tableName, first_name, last_name, email) => {
    const table_path = "/" + tableName;
    const table_ref = database.ref(table_path);
    const new_user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
    }
    table_ref.push(new_user).then((data) => {
      console.log("Write to database");
      console.log("data",data);
    }).catch((error) => {
      console.log('error ' + error);
    })
  }

  goToAddProduct = () => {
    this.props.navigation.navigate("AddProduct");
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: 'red'
  }
});
