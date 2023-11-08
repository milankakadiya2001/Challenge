// Library Imports
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// Local Imports
import {colors} from '../themes';
import {styles} from '../themes';
import {moderateScale} from '../common/constants';
import images from '../assets/images';
import CText from './common/CText';
import {badgesData} from '../api/constant';

export default function BadgesComponent() {
  const renderItem = ({item, index}) => {
    return (
      <View style={localStyles.containerStyle}>
        <Image
          source={images.badgesImage}
          style={localStyles.badgesImageStyle}
        />
        <View style={styles.flex}>
          <CText type={'s14'} numberOfLines={1} color={colors.charcoalGray}>
            {item.title}{' '}
            {item.multiplier && (
              <CText type={'s14'} numberOfLines={1} color={colors.yellow}>
                {item.multiplier}
              </CText>
            )}
          </CText>
          <CText
            type={'m14'}
            numberOfLines={2}
            style={styles.mt5}
            color={colors.slateGray}>
            {item.desc}
          </CText>
        </View>
      </View>
    );
  };

  return (
    <View style={localStyles.root}>
      <FlashList
        data={badgesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pv10}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.primaryLight,
  },
  containerStyle: {
    ...styles.mv5,
    ...styles.mh15,
    ...styles.p15,
    ...styles.rowStart,
    backgroundColor: colors.white,
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(1),
    borderColor: colors.paleLavender,
  },
  badgesImageStyle: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(30),
    ...styles.mr10,
  },
});
