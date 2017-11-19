import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


  var config = {
    apiKey: "AIzaSyCJxN4o92CZJHhU7NIobMq-yRH5OEmfKWA",
    authDomain: "forgetmenot-f11d2.firebaseapp.com",
    databaseURL: "https://forgetmenot-f11d2.firebaseio.com",
    projectId: "forgetmenot-f11d2",
    storageBucket: "",
    messagingSenderId: "437944261524"
  };
  firebase.initializeApp(config);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
