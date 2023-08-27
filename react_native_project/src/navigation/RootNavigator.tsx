import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

export type RootStackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
}

export default RootNavigator;
