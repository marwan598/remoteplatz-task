/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {debounce} from 'lodash';

import {RootStackParamList} from '../navigation/RootNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  fallbackMoviePoster,
  movie,
  moviePoster185,
  searchMovies,
} from '../api/moviesApi';
const {width, height} = Dimensions.get('window');

function Search() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [results, setResults] = useState<movie[]>([]);

  const handleCloseSearch = () => {
    navigation.goBack();
  };

  const handleMovieSearch = (value: string) => {
    if (value && value.length > 2) {
      searchMovies({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      }).then(data => {
        // console.log(data)
        if (data && data.results) {
          setResults(data.results);
        }
      });
    } else {
      setResults([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleMovieSearch, 400), []);

  return (
    <SafeAreaView className=" flex-1 bg-darkBackground">
      <View className=" mx-4 my-5 flex-row justify-between items-center border border-borderDark rounded-full">
        <TouchableOpacity className="rounded-full p-3 m-1 bg-mYellow">
          <Icon name="filter-outline" size={25} color="black" />
        </TouchableOpacity>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor="lightgray"
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={handleCloseSearch}
          className="rounded-full p-3 m-1 bg-mYellow">
          <Icon name="close" size={25} color="black" />
        </TouchableOpacity>
      </View>
      {/* {Search Results} */}
      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          className=" space-y-3 ">
          <Text className=" text-white font-semibold ml-1">
            Results ({results.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => (
              <View className=" space-y-2 mb-4" key={index}>
                <Image
                  className=" rounded-3xl"
                  source={{
                    uri:
                      moviePoster185(item?.poster_path) || fallbackMoviePoster,
                  }}
                  style={{width: width * 0.44, height: height * 0.3}}
                />
                <Text className=" text-textWhite ml-1">
                  {item.title.length > 22
                    ? item.title.slice(0, 22) + '...'
                    : item.title}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/movieTime.png')}
            className="h-96 w-96"
          />
        </View>
      )}
    </SafeAreaView>
  );
}
export default Search;
