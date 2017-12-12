import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView,StyleSheet} from 'react-native';

export default class Component6 extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    };
  }

  render(){
    return(
      <View>
        <Text>Details</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component6', () => Component6);
