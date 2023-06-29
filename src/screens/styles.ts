import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20, marginVertical: 10},
  productContainer: {flexDirection: 'row', padding: 10},
  flexContainer: {flex: 1},
  centerItems: {alignItems: 'center'},
  selfCenter: {alignSelf: 'center'},
  alignToStart: {alignSelf: 'flex-start'},
  imageStyle: {
    width: 120,
    height: 170,
    marginRight: 10,
    borderRadius: 60,
  },
  fullImageStyle: {
    width: '100%',
    height: '60%',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    lineHeight: 26,
  },
  subTextStyle: {
    fontSize: 16,
    lineHeight: 26,
    color: 'green',
  },
  titleTextStyle: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  priceStyle: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  setMargin: {marginHorizontal: 15},
  buttonTextStyle: {fontSize: 40},
  separator: {height: 6, backgroundColor: '#E8E8E8'},
});
export default styles;
