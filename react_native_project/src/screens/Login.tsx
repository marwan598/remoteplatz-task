import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../global/components/Button';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import Input from '../global/components/Input';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup.string().required('Password is required'),
});

interface LoginProps {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = ({
    email: emailInput,
    password: passwordInput,
  }: LoginProps) => {
    setEmail(emailInput);
    setPassword(passwordInput);
    console.log(email, password);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className=" font-bold text-5xl text-black mb-10">Login</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleLogin(values)}>
        {({handleSubmit}) => (
          <>
            <Field component={Input} name="email" placeholder="Email" />
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
