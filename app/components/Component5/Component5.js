import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableHightlight
} from 'react-native';

export default class Component5 extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response)
      });
    });
  }

  onPress(user){
    alert('test');
  }

  renderRow(user, sectionId, rowId, hightlightRow){
    return(
      <TouchableHightlight onPress={() => {this.onPress(user)}}>
        <View style={styles.row}>
          <Text>{user.name} city: {user.address.city}</Text>
        </View>
      </TouchableHightlight>
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

AppRegistry.registerComponent('Component5', () => Component5);
