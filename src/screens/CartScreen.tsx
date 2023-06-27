import {View, Text, FlatList, Image, Alert} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import QuantityComponent from '../components/QuantityComponent';
import {addTOCartAction, removeFromCartAction} from '../actions';
import UIButton from '../components/UIButton';

const CartScreen = props => {
  const {productList} = useSelector(state => state?.productList);
  const {cartMap} = useSelector(state => state?.cartList);
  const filteredList = productList.filter(item => cartMap.get(item?.id));
  const dispatch = useDispatch();

  const calculateCartValue = () => {
    let totalPrice = 0;

    filteredList.forEach(product => {
      const quantity = cartMap.get(product?.id) ?? 0;
      const price = product?.price;
      totalPrice += quantity * price;
    });
    return totalPrice.toFixed(2);
  };

  const renderCartList = ({item}) => {
    const addToCart = () => dispatch(addTOCartAction(item));
    const removeFromCart = () => dispatch(removeFromCartAction(item));

    return (
      <View style={styles.productContainer}>
        <Image
          source={{uri: item?.img}}
          style={styles.imageStyle}
          resizeMode="stretch"
        />
        <View style={styles.flexContainer}>
          <Text style={styles.titleTextStyle}>{item?.name}</Text>
          <Text style={styles.priceStyle}>{'£ ' + item?.price.toFixed(2)}</Text>
          <QuantityComponent
            quantity={cartMap.get(item?.id)}
            onMinus={removeFromCart}
            onPlus={addToCart}
            styles={styles.alignToStart}
          />
        </View>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View>
        <Text
          style={
            styles.buttonTextStyle
          }>{`Total cart value £ ${calculateCartValue()}`}</Text>
        <Text style={styles.subTextStyle}>
          Your order is eligible for Free delivery
        </Text>
      </View>
    );
  };
  const renderEmptyComp = () => (
    <View style={styles.centerItems}>
      <Text>Your cart is empty continue shopping</Text>
      <UIButton
        buttonTitle="Home"
        type="link"
        onPress={props?.navigation?.popToTop}
      />
    </View>
  );
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredList}
        ListHeaderComponent={filteredList.length && renderHeader}
        ListEmptyComponent={renderEmptyComp}
        renderItem={renderCartList}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={item => item.id.toString()}
      />
      <UIButton
        type="default"
        buttonTitle="Proceed to buy"
        onPress={() =>
          Alert.alert(
            'Proceed to buy',
            `Your cart value is £ ${calculateCartValue()}`,
          )
        }
      />
    </View>
  );
};

export default CartScreen;
