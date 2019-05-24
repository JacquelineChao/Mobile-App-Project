import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from "react-native";
import { CheckBox } from 'react-native-elements';

const initialList = [
  {
    id: 1,
    description: "bread",
    gotten: true,
  },
  {
    id: 2,
    description: "eggs",
    gotten: false,
  },
  {
    id: 3,
    description: "green eggs",
    gotten: false,
  },
  {
    id: 4,
    description: "ham",
    gotten: false,
  },
  {
    id: 5,
    description: "puffer fish",
    gotten: false,
  },
  {
    id: 6,
    description: "soy sauce",
    gotten: false,
  },
];

class SimpleList extends Component {
  constructor(props) {
    super(props);
      /*products: [{ key: "bread" }, { key: "eggs"}]*/
      this.state = { data: this._addKeysToList(initialList) };
      this.checkfunction = this.checkFunction.bind(this);
  }

  checkFunction (item) {
    let tempData = this.state.data.map(i => {
      if (item.description === i.description) {
        i.gotten = !i.gotten;
      }
      return i;
    });
    this.setState({ data: tempData });
  }

  _renderItem = ({item}) => {
    /*return <Text style={styles.row}>{products.item.key}</Text>;*/
    return(
      <CheckBox
        title={item.description}
        onPress={() => {this.checkFunction(item);}}
        checked={item.gotten}
        />
    );
  };

  _addKeysToList = shopList => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return shopList.map(shopList => {
      return Object.assign(shopList, { key: shopList.description });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  row: { fontSize: 36, padding: 42, borderWidth: 1, borderColor: "#DDDDDD" }
});

export default SimpleList;
