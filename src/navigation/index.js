// Librairies import
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Local import
import StackNavigation from './Type/StackNavigation';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
