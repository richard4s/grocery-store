import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';


import CategoriesScreen from '../screens/CategoriesScreen';
import SearchScreen from '../screens/SearchScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
      tabBarOptions={{
        activeTintColor: '#ff9f23',
        inactiveTintColor: 'gray'
      }}   >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-apps" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={LinksScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cart" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Links':
      return 'Links';
    case 'Search':
      return 'Search';
  }
}
