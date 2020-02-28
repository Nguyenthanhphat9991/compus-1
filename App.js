import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {LearnScreen, LearnScreenDetail} from './src/Screen';

const StackLearn = createStackNavigator();

const LearnStack = () => {
  return (
    <NavigationContainer>
      <StackLearn.Navigator initialRouteName="LearnScreen">
        <StackLearn.Screen
          name="LearnScreen"
          component={() => <LearnScreen />}
        />
        <StackLearn.Screen
          name="LearnScreenDetail"
          component={() => <LearnScreenDetail />}
        />
      </StackLearn.Navigator>
    </NavigationContainer>
  );
};

export default LearnStack;
