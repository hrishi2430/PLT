import React from 'react';
import {shallow} from 'enzyme';
import ProductScreen from '../ProductScreen';
import UIButton from '../../components/UIButton';
import QuantityComponent from '../../components/QuantityComponent';
import {addTOCartAction, removeFromCartAction} from '../../actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('../actions', () => ({
  addTOCartAction: jest.fn(),
  removeFromCartAction: jest.fn(),
}));

describe('ProductScreen', () => {
  let useSelectorMock;
  let useDispatchMock;
  let navigationMock;

  beforeEach(() => {
    useSelectorMock = jest.spyOn(require('react-redux'), 'useSelector');
    useDispatchMock = jest.spyOn(require('react-redux'), 'useDispatch');
    navigationMock = {navigate: jest.fn()};
  });

  afterEach(() => {
    useSelectorMock.mockRestore();
    useDispatchMock.mockRestore();
  });

  it('should render correctly', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map()});
    const wrapper = shallow(
      <ProductScreen route={{params: {selectedProduct: {}}}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render cart counter correctly', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map([[1, 2]])});
    const wrapper = shallow(
      <ProductScreen
        route={{params: {selectedProduct: {}}}}
        navigation={navigationMock}
      />,
    );
    const renderCartCounter = wrapper.instance().renderCartCounter;
    const cartCounterButton = shallow(renderCartCounter());

    expect(cartCounterButton.find(UIButton).prop('buttonTitle')).toBe(
      'Cart(2)',
    );
    expect(cartCounterButton.find(UIButton).prop('onPress')).toBe(
      navigationMock.navigate,
    );
  });

  it('should add selected product to cart', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map()});
    const wrapper = shallow(
      <ProductScreen route={{params: {selectedProduct: {}}}} />,
    );
    const addToCart = wrapper.instance().addToCart;

    addToCart();

    expect(addTOCartAction).toHaveBeenCalledWith({});
  });

  it('should remove selected product from cart', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map([[1, 1]])});
    const wrapper = shallow(
      <ProductScreen route={{params: {selectedProduct: {id: 1}}}} />,
    );
    const removeFromCart = wrapper.instance().removeFromCart;

    removeFromCart();

    expect(removeFromCartAction).toHaveBeenCalledWith({id: 1});
  });

  it('should render QuantityComponent if product is in cart', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map([[1, 2]])});
    const wrapper = shallow(
      <ProductScreen route={{params: {selectedProduct: {id: 1}}}} />,
    );
    const quantityComponent = wrapper.find(QuantityComponent);

    expect(quantityComponent.prop('quantity')).toBe(2);
    expect(quantityComponent.prop('onMinus')).toBe(
      wrapper.instance().removeFromCart,
    );
    expect(quantityComponent.prop('onPlus')).toBe(wrapper.instance().addToCart);
  });

  it('should render "Add to cart" button if product is not in cart', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map()});
    const wrapper = shallow(
      <ProductScreen route={{params: {selectedProduct: {}}}} />,
    );
    const addToCartButton = wrapper.find(UIButton).at(0);

    expect(addToCartButton.prop('buttonTitle')).toBe('Add to cart');
    expect(addToCartButton.prop('onPress')).toBe(wrapper.instance().addToCart);
  });

  it('should navigate to CartScreen when "Buy now" button is pressed', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map([[1, 2]])});
    const wrapper = shallow(
      <ProductScreen
        route={{params: {selectedProduct: {}}}}
        navigation={navigationMock}
      />,
    );
    const buyNowButton = wrapper.find(UIButton).at(1);

    buyNowButton.prop('onPress')();

    expect(navigationMock.navigate).toHaveBeenCalledWith('Cart');
  });

  it('should disable "Buy now" button if product is not in cart', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map()});
    const wrapper = shallow(
      <ProductScreen route={{params: {selectedProduct: {}}}} />,
    );
    const buyNowButton = wrapper.find(UIButton).at(1);

    expect(buyNowButton.prop('disable')).toBe(true);
  });

  it('should enable "Buy now" button if product is in cart', () => {
    useSelectorMock.mockReturnValueOnce({cartMap: new Map([[1, 2]])});
    const wrapper = shallow(
      <ProductScreen route={{params: {selectedProduct: {id: 1}}}} />,
    );
    const buyNowButton = wrapper.find(UIButton).at(1);

    expect(buyNowButton.prop('disable')).toBe(false);
  });
});
