import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import Button from '../global/components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';
import Logo from '../global/components/Logo';

function Welcome(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  return (
    <SafeAreaView className=" flex-1 justify-center items-center bg-darkBackground ">
      <View className="flex-1 justify-start items-center mt-10">
        <Logo isLoggedIn={false} />
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../assets/images/movieTime.png')}
          className="h-96 w-96"
        />
      </View>
      <View className="flex-1">
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
    </SafeAreaView>
  );
}

export default Welcome;
