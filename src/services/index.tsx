import {
  getProductList,
  getProductListFailure,
  getProductListInit,
} from '../actions';
export const ProductsList = [
  {
    id: 1,
    colour: 'Multi',
    name: 'MULTI WATERCOLOUR PLISSE STRAPPY MAXI DRESS',
    price: 30.0,
    imgSrc: require('../assets/image1.jpeg'),
    img: 'https://cdn-img.prettylittlething.com/d/b/4/d/db4db7ada9bb8cede18e22ad10c4ea9acf551627_cmz2307_1.jpg?imwidth=1024',
  },
  {
    id: 2,
    colour: 'Pink',
    name: 'PINK FLORAL PRINT PUFF SLEEVE TIE FRONT BODYCON DRESS',
    price: 38.0,
    imgSrc: require('../assets/image2.jpeg'),
    img: 'https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024',
  },
  {
    id: 3,
    colour: 'Black',
    name: 'BLACK SHEET STRAPPY TEXTURED GLITTER BODYCON DRESS',
    price: 38.0,
    imgSrc: require('../assets/image3.jpeg'),
    img: 'https://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
  },
  {
    id: 4,
    colour: 'White',
    name: 'WHITE BRODERIE CORSET RUCHED BODYCON DRESS',
    price: 35.0,
    imgSrc: require('../assets/image4.jpeg'),
    img: 'https://cdn-img.prettylittlething.com/b/e/5/b/be5b752585de64060680ed96318037857e765f91_cne8502_1.jpg?imwidth=1024',
  },
  {
    id: 5,
    colour: 'Rust',
    name: 'RUST ACETATE SLINKY RING STRAP DETAIL BODYCON DRESS',
    price: 15.0,
    imgSrc: require('../assets/image5.jpeg'),
    img: 'https://cdn-img.prettylittlething.com/c/2/7/e/c27ee1b88f4af5275a6330a3028c4d71745792ba_cne9901_1.jpg?imwidth=1024',
  },
];

export const fetchProductList = () => dispatch => {
  dispatch(getProductListInit());
  fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
    .then(response => {
      if (response) {
        return response.json();
      } else return ProductsList;
    })
    .then(data => dispatch(getProductList(data)))
    .catch(error => dispatch(getProductListFailure(error)));
};
