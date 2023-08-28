import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import authContext from './src/context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  (async () => {
    await AsyncStorage.getItem('AccessToken').then(value => {
      if (value) {
        setToken(value);
        setAuthenticated(true);
      }
    });
  })();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <authContext.Provider value={{authenticated, setAuthenticated}}>
        {authenticated && token !== undefined ? (
          <RootNavigator />
        ) : (
          <AuthNavigator />
        )}
      </authContext.Provider>
    </NavigationContainer>
  );
}

export default App;
