import React from 'react';
import {shallow} from 'enzyme';
import {FlatList, Text, Image} from 'react-native';
import HomeScreen from '../HomeScreen';
import {fetchProductList} from '../../services';

jest.mock('../services', () => ({
  fetchProductList: jest.fn(),
}));

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch product list on mount', () => {
    shallow(<HomeScreen />);
    expect(fetchProductList).toHaveBeenCalledTimes(1);
  });

  it('should navigate to ProductScreen on product press', () => {
    const navigation = {navigate: jest.fn()};
    const wrapper = shallow(<HomeScreen navigation={navigation} />);
    const product = {
      id: 1,
      colour: 'Black',
      name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
      price: 10,
      img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
    };

    wrapper.find(FlatList).props().renderItem({item: product});

    expect(navigation.navigate).toHaveBeenCalledWith('Product', {
      selectedProduct: product,
    });
  });

  it('should render product correctly', () => {
    const product = {
      id: 1,
      name: 'Black Frill Tie Shoulder Bodycon Dress',
      img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
      price: 10.99,
    };

    const wrapper = shallow(<HomeScreen />);
    const renderItem = wrapper.find(FlatList).props().renderItem;

    const itemWrapper = shallow(renderItem({item: product}));

    expect(itemWrapper.find(Image).prop('source')).toEqual({uri: product.img});
    expect(itemWrapper.find(Text).at(0).prop('children')).toBe(product.name);
    expect(itemWrapper.find(Text).at(1).prop('children')).toBe(
      `£ ${product.price.toFixed(2)}`,
    );
  });
});
