import React from 'react';
import {View, Text} from 'react-native';
import Button from '../global/components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';

function Welcome(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className=" flex-1 justify-center items-center ">
      <View className=" justify-center items-center mb-10">
        <Text className=" font-bold text-3xl text-black mb-10 text-center">
          Welcome! please Login or create a new account
        </Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
        title="Login"
      />
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}
        title="Register"
      />
    </View>
  );
}

export default Welcome;
