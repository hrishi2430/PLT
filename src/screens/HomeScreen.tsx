import React, {useEffect} from 'react';
import {View, FlatList, Text, Image, Pressable} from 'react-native';
import {ProductInterface} from '../interface';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductList} from '../services';
import styles from './styles';
import {isIosDevice} from '../utils';

const HomeScreen = props => {
  const {productList} = useSelector(state => state?.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  const onProductPress = (item: ProductInterface) => {
    props?.navigation?.navigate('Product', {selectedProduct: item});
  };
  const renderProduct = ({item}: {item: ProductInterface}) => {
    return (
      <Pressable
        style={styles.productContainer}
        onPress={() => onProductPress(item)}>
        <Image
          source={isIosDevice ? item?.imgSrc : {uri: item?.img}}
          style={styles.imageStyle}
          resizeMode="stretch"
        />
        <View style={styles.flexContainer}>
          <Text style={styles.titleTextStyle}>{item?.name}</Text>
          <Text style={styles.priceStyle}>{'£ ' + item?.price.toFixed(2)}</Text>
          <Text style={styles.subText}>Color: {item?.colour}</Text>
        </View>
      </Pressable>
    );
  };
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        showsVerticalScrollIndicator={false}
        renderItem={renderProduct}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
