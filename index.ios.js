import React, {Component} from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  PropTypes} from 'react-native';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

export default class myapp extends Component{
  // renderScene(route, navigator){
  //   switch(route.component){
  //     case 'component5':
  //       return (<Component5 navigator={navigator} title="component5"/>)
  //     case 'component6':
  //       return (<Component6 navigator={navigator} title="component6"/>)
  //   }
  // }

  render() {
   return (
     <NavigatorIOS
       initialRoute={{
         title: 'Component5',
         component: Component5
       }}
       style={{flex: 1}}
     />
   );
 }
}

AppRegistry.registerComponent('myapp', () => myapp);
