import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomHeader from '../CustomHeader';
export default class LobbyScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="LobbyScreen"
          ishome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>LobbyScreen!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('LobbyScreenDetail')}>
            <Text>Go LobbyScreen Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
