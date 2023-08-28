import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Input = (props: any) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View className=" h-12 w-full  mb-5 justify-center items-center">
      <View
        className={
          'h-12 w-4/5 p-5 rounded-full  justify-center border-2 border-white'
        }>
        <TextInput
          autoCapitalize="none"
          className="h-12 text-textWhite"
          placeholderTextColor="#D0CABD"
          onChangeText={text => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          value={value}
          {...inputProps}
        />
      </View>
      {hasError && (
        <Text className=" text-xs text-red mb-5">{errors[name]}</Text>
      )}
    </View>
  );
};

export default Input;
