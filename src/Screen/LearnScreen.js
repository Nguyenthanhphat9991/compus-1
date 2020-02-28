import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomHeader from '../CustomHeader';

export default class LearnScreen extends Component {
  navigateScreen = screenName => {
    // const {navigation} = this.props;
    console.log(this.props);
    // navigation.navigate(screenName);
  };

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="LearnScreen" ishome={true} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>LearnScreen</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.navigateScreen('LearnScreenDetail')}>
            <Text>Go LearnScreen Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
