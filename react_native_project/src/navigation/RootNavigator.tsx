import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/homeScreen/Home';
import Search from '../screens/Search';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name="Search" component={Search} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default RootNavigator;
