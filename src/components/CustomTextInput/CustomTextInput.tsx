import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { textInputProps } from "@/src/types/CustomTextInputTypes";

const CustomTextInput = (props: textInputProps) => {
  const {
    leftIcon,
    rightIcon,
    leftIconSize = 20,
    rightIconSize = 20,
    onLeftIconPress,
    onRightIconPress,
    containerStyle,
    inputStyle,
    ...inputProps
  } = props;
  return (
    <View
      className={`flex-row items-center border rounded-lg p-2 max-h-[17%] justify-between ${containerStyle}`}
    >
      {leftIcon && (
        <TouchableOpacity onPress={onLeftIconPress}>
          <Text>{leftIcon}</Text>
        </TouchableOpacity>
      )}
      <TextInput
        className={`min-w-[80%] ${
          !leftIcon && !rightIcon ? "max-w-[100%]" : "max-w-[80%]"
        } min-h-[10%] py-3 ${inputStyle}`}
        placeholderTextColor={"black"}
        {...inputProps}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Text>{rightIcon}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
