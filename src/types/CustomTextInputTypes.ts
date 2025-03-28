import { TextInputProps } from "react-native";

export interface textInputProps extends TextInputProps {
  inputStyle?: string;
  leftIcon?: string;
  rightIcon?: string;
  leftIconSize?: number;
  rightIconSize?: number;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  containerStyle?: string;
}
