import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';

const users = [
  {name: 'Shailin Biharie'},
  {name: 'Sandeep Biharie'},
  {name: 'Sunil Biharie'},
  {name: 'Shanta Lakhi'}
]

export default class Component4 extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(user, sectionId, rowId, hightlightRow){
    return(
      <View style={styles.row}>
        <Text >{user.name}</Text>
      </View>
    )
  }

  render(){
    return(
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
    backgroundColor:'green',
    marginBottom:3
  },
  rowText: {
    flex:1
  }
});

AppRegistry.registerComponent('Component4', () => Component4);
