import {ImageRequireSource} from 'react-native';

export interface ProductInterface {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
  imgSrc: ImageRequireSource;
}
export interface ProductScreenProps {
  selectedProduct: ProductInterface;
}

export interface RootStackParamList {
  PTL: undefined;
  Product: ProductScreenProps;
}
