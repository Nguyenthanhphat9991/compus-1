import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomHeader from '../CustomHeader';

export default class CultureScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="CultureScreen"
          ishome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>CultureScreen</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('CultureScreenDetail')}>
            <Text>Go CultureScreen Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
