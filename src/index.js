// Library Imports
import React from 'react';
import {StatusBar, View} from 'react-native';

// Local Imports
import AppNavigator from './navigation';
import {styles} from './themes';

const App = () => {
  return (
    <View style={styles.flex}>
      <StatusBar barStyle={'dark-content'} />
      <AppNavigator />
    </View>
  );
};

export default App;
