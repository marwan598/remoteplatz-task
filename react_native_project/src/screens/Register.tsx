import {Field, Formik} from 'formik';
import React from 'react';
import {View, Text, Alert} from 'react-native';
import * as yup from 'yup';
import Input from '../global/components/Input';
import Button from '../global/components/Button';
import {userRegister} from '../api/register';
import {AxiosResponse} from 'axios';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigation/AuthNavigator';

const registerValidationSchema = yup.object().shape({
  user: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

interface RegisterProps {
  user: string;
  password: string;
  confirmPassword: string;
}

function Register(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const handleRegister = async ({
    user: userInput,
    password: passwordInput,
  }: RegisterProps) => {
    userRegister({user: userInput, pwd: passwordInput}).then(
      (result: string | AxiosResponse) => {
        if (typeof result !== 'string' && result.status === 201) {
          Alert.alert('User Successfully Registered you can now  login');
          navigation.replace('Login');
          userInput = '';
          passwordInput = '';
        }
      },
    );
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text className=" font-bold text-5xl text-black mb-10">Register</Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{user: '', password: '', confirmPassword: ''}}
        onSubmit={values => handleRegister(values)}>
        {({handleSubmit}) => (
          <>
            <Field component={Input} name="user" placeholder="Username" />
            <Field
              component={Input}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Field
              component={Input}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <View className=" w-full items-center">
              <Button onPress={handleSubmit} title="Register" />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Register;
