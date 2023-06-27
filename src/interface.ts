export interface ProductInterface {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}
export interface ProductScreenProps {
  selectedProduct: ProductInterface;
}

export interface RootStackParamList {
  PTL: undefined;
  Product: ProductScreenProps;
}
