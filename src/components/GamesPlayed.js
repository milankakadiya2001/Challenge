// Librairies import
import {StyleSheet, View} from 'react-native';
import React from 'react';

// Local import
import {colors} from '../themes';
import {moderateScale} from '../common/constants';
import CommingSoon from './CommingSoon';
import {styles} from '../themes';

export default function GamesPlayed() {
  return (
    <View style={localStyles.root}>
      <CommingSoon />
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.primaryLight,
    height: moderateScale(400),
    ...styles.flexCenter,
  },
});
