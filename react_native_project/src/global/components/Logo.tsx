import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {userLogout} from '../../api/logout';
import {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authContext from '../../context/authContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RootNavigator';

interface Props {
  isLoggedIn: boolean;
}

function Logo({isLoggedIn}: Props): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {setAuthenticated} = useContext(authContext);
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

  const openSearch = () => {
    navigation.navigate('Search');
  };
  return (
    <View className="flex-row justify-between items-center mx-4">
      {isLoggedIn && (
        <TouchableOpacity
          onPress={handleLogout}
          className="rounded-full p-3 m-1 bg-mYellow">
          <Icon name="logout" size={30} color="black" />
        </TouchableOpacity>
      )}
      <View className=" flex-col justify-center items-center">
        <Text className="text-white text-5xl font-bold">
          <Text className=" text-mYellow">M</Text>ovies
        </Text>
        <Text className="text-white text-lg font-bold">
          Movie Magic Made Easy!
        </Text>
      </View>
      {isLoggedIn && (
        <TouchableOpacity
          onPress={openSearch}
          className="rounded-full p-3 m-1 bg-mYellow">
          <Icon name="magnify" size={30} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Logo;
