/* eslint-disable react/no-unstable-nested-components */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../navigation/RootNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {userLogout} from '../api/logout';
import {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authContext from '../context/authContext';

function Home(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {setAuthenticated} = useContext(authContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="logout"
          size={30}
          backgroundColor="white"
          color="black"
          onPress={handleLogout}
        />
      ),
    });
  });
  const handleLogout = () => {
    userLogout()
      .then(async (result: string | AxiosResponse) => {
        if (typeof result !== 'string' && result.status === 204) {
          await AsyncStorage.removeItem('AccessToken').then(() => {
            setAuthenticated(false);
          });
        } else {
          console.log(result);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View className=" flex-1 justify-center items-center ">
      <View className=" justify-center items-center mb-10">
        <Text className=" font-bold text-3xl text-black mb-10 text-center">
          Welcome! To Home Screen
        </Text>
      </View>
    </View>
  );
}

export default Home;
