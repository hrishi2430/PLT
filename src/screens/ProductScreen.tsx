import React, {useLayoutEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import UIButton from '../components/UIButton';
import {useDispatch, useSelector} from 'react-redux';
import {addTOCartAction, removeFromCartAction} from '../actions';
import QuantityComponent from '../components/QuantityComponent';

const ProductScreen = props => {
  const {selectedProduct} = props?.route?.params;
  const dispatch = useDispatch();
  const {cartMap} = useSelector(state => state?.cartList);

  const getQuantity = () =>
    Array.from(cartMap.values()).reduce((a, b) => a + b, 0);

  useLayoutEffect(() => {
    props?.navigation?.setOptions({
      headerRight: () => renderCartCounter(),
    });
  });

  const goToCart = () => props.navigation.navigate('Cart');

  const renderCartCounter = () => (
    <UIButton
      buttonTitle={`Cart(${getQuantity()})`}
      type="link"
      onPress={goToCart}
    />
  );
  const addToCart = () => dispatch(addTOCartAction(selectedProduct));
  const removeFromCart = () => dispatch(removeFromCartAction(selectedProduct));

  return (
    <View style={styles.container}>
      <Image
        source={{uri: selectedProduct?.img}}
        style={styles.fullImageStyle}
        resizeMode="center"
      />
      <View style={[styles.flexContainer, styles.centerItems]}>
        <Text style={styles.titleTextStyle}>{selectedProduct?.name}</Text>
        <Text style={styles.priceStyle}>
          {'£ ' + selectedProduct?.price.toFixed(2)}
        </Text>
      </View>
      {cartMap.get(selectedProduct?.id) ? (
        <QuantityComponent
          quantity={cartMap.get(selectedProduct?.id)}
          onMinus={removeFromCart}
          onPlus={addToCart}
        />
      ) : (
        <UIButton
          buttonTitle="Add to cart"
          onPress={addToCart}
          type="default"
        />
      )}
      <UIButton
        buttonTitle="Buy now"
        onPress={goToCart}
        type="default"
        disable={!cartMap.get(selectedProduct?.id)}
      />
    </View>
  );
};

export default ProductScreen;
