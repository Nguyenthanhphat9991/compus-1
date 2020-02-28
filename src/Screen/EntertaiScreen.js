import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomHeader from '../CustomHeader';

export default class EntertaiScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="EntertaiScreen"
          ishome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>EntertaiScreen!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('EntertaiScreenDetail')}>
            <Text>Go EntertaiScreen Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
