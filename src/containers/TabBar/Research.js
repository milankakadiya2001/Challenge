// Librairies Imports
import {View} from 'react-native';
import React from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CommingSoon from '../../components/CommingSoon';
import {styles} from '../../themes';

export default function Research() {
  return (
    <CSafeAreaView>
      <View style={styles.flexCenter}>
        <CommingSoon />
      </View>
    </CSafeAreaView>
  );
}
