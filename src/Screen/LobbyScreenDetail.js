import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../CustomHeader';

export default class LobbyScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="LobbyScreen Detail"
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>LobbyScreenDetail!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
