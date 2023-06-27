import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {FlatList} from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import CartScreen from '../CartScreen';

Enzyme.configure({adapter: new Adapter()});
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('react-native-vector-icons/FontAwesome', () => ({
  createIconSet: jest.fn(),
}));

const productList = [
  {id: 1, name: 'Product 1', price: 10},
  {id: 2, name: 'Product 2', price: 15},
  {id: 3, name: 'Product 3', price: 20},
];
const cartMap = new Map([
  [1, 2],
  [2, 1],
]);

describe('CartScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('renders correctly', () => {
    const wrapper = shallow(<CartScreen />);
    expect(wrapper.exists()).toBe(true);
  });
  test('matches snapshot', () => {
    const tree = renderer.create(<CartScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correct number of cart items', () => {
    const wrapper = shallow(<CartScreen />);
    wrapper.setProps({productList, cartMap});

    const flatList = wrapper.find(FlatList);
    const renderedItems = flatList.prop('data');
    expect(renderedItems.length).toBe(2); // Expected 2 items in the cart list
  });

  test('calculates correct total cart value', () => {
    const wrapper = shallow(<CartScreen />);
    wrapper.setProps({productList, cartMap});

    const instance = wrapper.instance();
    const totalCartValue = instance.calculateCartValue();

    // Expected total cart value: (2 * 10) + (3 * 15) = 70
    expect(totalCartValue).toBe('70.00');
  });

  test('calls addToCart function when clicking "Add to Cart" button', () => {
    const addToCartMock = jest.fn();
    const item = {id: 1, name: 'Product 1', price: 10};

    const wrapper = shallow(<CartScreen />);
    wrapper.setProps({productList: [item], cartMap: new Map()});

    const renderedItem = wrapper.find(FlatList).prop('renderItem')({item});
    renderedItem.props.addToCart(); // Simulate clicking the "Add to Cart" button

    expect(addToCartMock).toHaveBeenCalledTimes(1); // Verify that the addToCart function is called
  });
});
