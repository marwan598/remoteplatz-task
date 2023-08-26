import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Welcome" component={Welcome} />
      <RootStack.Screen
        options={{headerShown: true}}
        name="Login"
        component={Login}
      />
      <RootStack.Screen
        options={{headerShown: true}}
        name="Register"
        component={Register}
      />
    </RootStack.Navigator>
  );
}

export default RootNavigator;
