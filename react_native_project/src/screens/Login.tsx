import React, {useContext} from 'react';
import {View, Text, Alert} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosResponse} from 'axios';

import Input from '../global/components/Input';
import Button from '../global/components/Button';
import {userLogin} from '../api/login';
import authContext from '../context/authContext';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {AuthStackParamList} from '../navigation/AuthNavigator';

const loginValidationSchema = yup.object().shape({
  user: yup.string().required('Username is Required'),
  password: yup.string().required('Password is required'),
});

interface LoginProps {
  user: string;
  password: string;
}

function Login(): JSX.Element {
  const {setAuthenticated} = useContext(authContext);

  const handleLogin = ({
    user: userInput,
    password: passwordInput,
  }: LoginProps) => {
    userLogin({user: userInput, pwd: passwordInput})
      .then(async (result: string | AxiosResponse) => {
        if (typeof result !== 'string' && result.status === 200) {
          await AsyncStorage.setItem(
            'AccessToken',
            result.data.accessToken,
          ).then(() => {
            setAuthenticated(true);
          });
          // navigation.navigate('Home');
        } else {
          console.log(result);
          Alert.alert('Please check Username or password ');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View className="flex-1 justify-center items-center  bg-darkBackground">
      <Text className=" font-bold text-5xl text-white mb-10">
        <Text className=" text-mYellow">L</Text>ogin
      </Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{user: '', password: ''}}
        onSubmit={values => handleLogin(values)}>
        {({handleSubmit}) => (
          <>
            <Field component={Input} name="user" placeholder="Username" />
            <Field
              component={Input}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <View className=" w-full items-center">
              <Button onPress={handleSubmit} title="Login" />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Login;
