import React from 'react';
import {ButtonProps, Text, TouchableOpacity} from 'react-native';

interface Props extends ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      className=" bg-mYellow rounded-full py-3 my-5 w-60">
      <Text className=" text-lg text-black font-bold self-center uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
