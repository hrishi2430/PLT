import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface UIIconProps {
  iName: string;
  iSize?: number;
  iColor?: string;
  onPress?: () => void;
  iconContainerStyle?: StyleProp<ViewStyle>;
}
const UIIcon = (props: UIIconProps) => {
  return (
    <View style={props.iconContainerStyle}>
      <Icon
        name={props.iName}
        size={props.iSize ?? 30}
        color={props.iColor ?? '#FDBFDB'}
        onPress={props.onPress}
      />
    </View>
  );
};

export default UIIcon;
