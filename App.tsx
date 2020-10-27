import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabButtom from './src/components/Tab';

import Home from './src/pages/Home';
import Settings from './src/pages/Settings';
import Ligar from './src/pages/Ligar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabButtom {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ligar" component={Ligar} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
