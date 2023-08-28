import {View, Dimensions, Image, Text} from 'react-native';
import React from 'react';
import {
  fallbackMoviePoster,
  movie,
  moviePoster500,
} from '../../../api/moviesApi';

interface Props {
  item: movie;
}
const {width, height} = Dimensions.get('window');

function MovieCard({item}: Props): JSX.Element {
  return (
    <View>
      <Image
        source={{uri: moviePoster500(item.poster_path) || fallbackMoviePoster}}
        style={{width: width * 0.86, height: height * 0.65}}
        className="rounded-3xl"
      />
      <Text className=" text-textWhite text-3xl font-bold text-center mt-5 ">
        {item.title}
      </Text>
    </View>
  );
}

export default MovieCard;
