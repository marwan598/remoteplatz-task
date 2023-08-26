import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
};

const Button = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      className=" bg-btnColor rounded-full py-3 my-5 w-40">
      <Text className=" text-lg text-white font-bold self-center uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
