import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Platform} from 'react-native';
import Movies from './components/Movies';
import Logo from '../../global/components/Logo';
import {fetchMovies, movie} from '../../api/moviesApi';

function Home(): JSX.Element {
  const ios = Platform.OS === 'ios';
  const [movies, setMovies] = useState<movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetchMovies();
    if (data && data.results) {
      setMovies(data.results);
    }
  };

  return (
    <View className=" flex-1 bg-darkBackground ">
      {/* {Search bar and logo} */}
      <SafeAreaView className={ios ? 'my-2' : 'my-3'}>
        <Logo isLoggedIn />
      </SafeAreaView>

      {/* {Trending movies carousel} */}
      <Movies data={movies} />
    </View>
  );
}

export default Home;
