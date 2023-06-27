import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import UIIcon from './UIIcon';

interface QuantityComponentProps {
  quantity: number;
  onMinus: () => void;
  onPlus: () => void;
  styles?: StyleProp<ViewStyle>;
}

const QuantityComponent = (props: QuantityComponentProps) => {
  return (
    <View style={[styles.quantityContainer, props?.styles]}>
      <UIIcon iName="minus-square" onPress={props.onMinus} />
      <Text style={[styles.priceStyle, styles.setMargin]}>
        {props.quantity}
      </Text>
      <UIIcon iName="plus-square" onPress={props.onPlus} />
    </View>
  );
};

export default QuantityComponent;
