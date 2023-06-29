import React from 'react';
import {StyleProp, ViewStyle, Image, TouchableHighlight} from 'react-native';

interface UIIconProps {
  iconImage: string;
  iSize?: number;
  iColor?: string;
  onPress?: () => void;
  iconContainerStyle?: StyleProp<ViewStyle>;
}
const UIIcon = (props: UIIconProps) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={'transparent'}
      style={props?.iconContainerStyle}>
      <Image
        source={props?.iconImage}
        style={{
          height: props?.iSize ?? 30,
          width: props?.iSize ?? 30,
          tintColor: props?.iColor ?? '#FDBFDB',
        }}
        resizeMode="center"
      />
    </TouchableHighlight>
  );
};

export default UIIcon;
