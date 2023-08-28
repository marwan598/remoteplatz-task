/* eslint-disable react-native/no-inline-styles */
import {View, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';
import {movie} from '../../../api/moviesApi';

interface Props {
  data: movie[];
}
const {width} = Dimensions.get('window');

function Movies({data}: Props): JSX.Element {
  return (
    <View className="mt-8">
      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} />}
        firstItem={0}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.86}
        slideStyle={{alignItems: 'center'}}
      />
    </View>
  );
}
export default Movies;
