import React from 'react';
import {Text, Pressable, StyleProp, ViewStyle, TextStyle} from 'react-native';

import styles from './styles';
interface UIButtonProps {
  buttonTitle?: string;
  buttonIcon?: React.ReactElement;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: 'Outline' | 'link' | 'default';
  disable?: boolean;
}
const UIButton = (props: UIButtonProps) => {
  const {buttonTitle, onPress, type, disable = false} = props;
  const buttonStyle = () => {
    switch (type) {
      case 'Outline':
        return styles.outlineButtonStyle;
      case 'link':
        return styles.linkButtonStyle;

      default:
        return styles.defaultButtonStyle;
    }
  };
  const textStyle = () => {
    switch (type) {
      case 'Outline':
        return styles.outlineButtonTextStyle;
      case 'link':
        return styles.linkButtonTextStyle;

      default:
        return styles.buttonTextStyle;
    }
  };
  return (
    <Pressable
      style={[
        styles.buttonStyle,
        buttonStyle(),
        props?.buttonStyle,
        props.disable && styles.disableButtonStyle,
      ]}
      onPress={() => !disable && onPress()}>
      <Text style={[styles.buttonTextStyle, textStyle(), props?.textStyle]}>
        {buttonTitle}
      </Text>
    </Pressable>
  );
};

export default UIButton;
