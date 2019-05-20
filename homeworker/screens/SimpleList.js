import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CheckBox } from 'react-native-elements';

const initialList = [
  {
    id: 1,
    description: "bread",
    gotten: true,
  },


];

class SimpleList extends Component {
  constructor(props) {
    super(props);
    /*  Type your code here*/

      this.checkfunction = this.checkFunction.bind(this);
  }

  checkFunction (item) {
/*  Type your code here*/
  }

  _renderItem = ({item}) => {

    return(
/*  Type your code here*/
  );
  };

  _addKeysToList = shopList => {

    /*  Type your code here*/
  };

  render() {
    return (
      <View style={styles.container}>
    /*  Type your code here*/
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  row: { fontSize: 36, padding: 42, borderWidth: 1, borderColor: "#DDDDDD" }
});

export default SimpleList;
