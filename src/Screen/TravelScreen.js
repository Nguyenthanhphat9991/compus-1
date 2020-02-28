import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomHeader from '../CustomHeader';

export default class TravelScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="TravelScreen"
          ishome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>TravelScreen</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('TravelScreenDetail')}>
            <Text>Go TravelScreen Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
