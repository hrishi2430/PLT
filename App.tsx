// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PTL" component={HomeScreen} />
          <Stack.Screen
            name="Product"
            options={{title: ''}}
            component={ProductScreen}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
