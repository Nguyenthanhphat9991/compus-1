import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../CustomHeader';

export default class CultureScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="CultureScreen Detail"
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>CultureScreenDetail</Text>
        </View>
      </SafeAreaView>
    );
  }
}
