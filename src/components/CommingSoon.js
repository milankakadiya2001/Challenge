// Librairies import
import {StyleSheet} from 'react-native';
import React from 'react';

// Local import
import CButton from './common/CButton';
import {styles} from '../themes';

export default function CommingSoon() {
  return (
    <CButton
      title={'Comming Soon'}
      textType={'s14'}
      onPress={() => {}}
      style={localStyles.buttonStyle}
      containerStyle={localStyles.containerStyle}
    />
  );
}

const localStyles = StyleSheet.create({
  containerStyle: {
    width: '40%',
    ...styles.selfCenter,
  },
});
