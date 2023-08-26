import {Field, Formik} from 'formik';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as yup from 'yup';
import Input from '../global/components/Input';
import Button from '../global/components/Button';

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

interface RegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
}

function Register(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = ({
    email: emailInput,
    password: passwordInput,
    confirmPassword: confirmPasswordInput,
  }: RegisterProps) => {
    setEmail(emailInput);
    setPassword(passwordInput);
    setConfirmPassword(confirmPasswordInput);
    console.log(email, password, confirmPassword);
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text className=" font-bold text-5xl text-black mb-10">Register</Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={values => handleRegister(values)}>
        {({handleSubmit}) => (
          <>
            <Field component={Input} name="email" placeholder="Email" />
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
