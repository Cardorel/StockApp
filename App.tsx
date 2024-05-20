import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreen} from './src/navigation/home';
import {StoreScreen} from './src/screens/StoreScreen.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from './src/constants/COLORS.ts';
import {SearchStackScreen} from './src/navigation/search';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeScreen"
            component={HomeStackScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarActiveTintColor: COLOR.secondary_color,
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="SearchScreen"
            component={SearchStackScreen}
            options={{
              tabBarLabel: '',
              tabBarActiveTintColor: COLOR.secondary_color,
              headerShown: false,
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => (
                <Icon name="search" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Store"
            component={StoreScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarActiveTintColor: COLOR.secondary_color,
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => (
                <Icon name="cart-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
