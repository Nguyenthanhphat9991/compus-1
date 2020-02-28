import React, {Component} from 'react';
import * as appConstant from './appConstant';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
