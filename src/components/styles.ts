import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  disableButtonStyle: {
    backgroundColor: 'gray',
  },
  defaultButtonStyle: {
    backgroundColor: '#FDBFDB',
  },
  outlineButtonStyle: {
    borderColor: '#FDBFDB',
    borderWidth: 1,
  },
  linkButtonStyle: {
    borderColor: 'transparent',
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  outlineButtonTextStyle: {
    color: '#FDBFDB',
  },
  linkButtonTextStyle: {
    color: '#FDBFDB',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  priceStyle: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  setMargin: {marginHorizontal: 15},
});

export default styles;
