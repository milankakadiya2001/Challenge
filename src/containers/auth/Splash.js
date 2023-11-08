// Library Imports
import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

// Local Imports
import {colors, styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.TabBar}],
      });
    }, 1000);
  }, []);

  return (
    <View style={localStyles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Splash;

const localStyles = StyleSheet.create({
  container: {
    ...styles.flex,
    ...styles.itemsCenter,
    ...styles.justifyCenter,
    backgroundColor: colors.white,
  },
});
