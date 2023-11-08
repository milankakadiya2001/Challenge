// Libraries Imports
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {WheelPicker} from 'react-native-wheel-picker-android';

// Local Imports
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import {predicationData} from '../../api/constant';
import {isAndroid, moderateScale} from '../../common/constants';
import CButton from '../common/CButton';

export default function PredictionModal(props) {
  const {SheetRef, predictionStatus} = props;
  const [selectedItem, setSelectedItem] = useState(15);

  const onItemSelected = selectedItem => setSelectedItem(selectedItem);

  const onPressSubmit = () => SheetRef.current?.hide();

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorColor={colors.grayishBlue}
      containerStyle={localStyles.actionSheetStyle}>
      <CText type={'s16'} color={colors.charcoalGray} style={styles.mt15}>
        {strings.yourPrediction}
        {predictionStatus}
      </CText>
      <CText
        type={'s14'}
        color={colors.slateGray}
        style={localStyles.entryTicketsStyle}>
        {strings.entryTickets}
      </CText>
      <View style={localStyles.entryStyle}>
        {isAndroid && <View style={localStyles.indicatorStyle} />}
        <WheelPicker
          data={predicationData}
          onItemSelected={onItemSelected}
          selectedItemTextColor={colors.charcoalGray}
          selectedItemTextFontFamily={'Montserrat-SemiBold'}
          selectedItemTextSize={moderateScale(24)}
          itemTextSize={moderateScale(18)}
          itemTextFontFamily={'Montserrat-SemiBold'}
          initPosition={15}
          hideIndicator={false}
        />
      </View>
      <View style={localStyles.bottomTextStyle}>
        <View>
          <CText type={'m12'} color={colors.grayishBlue}>
            {strings.youCanWin}
          </CText>
          <CText type={'s14'} color={colors.green}>
            {'$2000'}
          </CText>
        </View>
        <View style={styles.rowStart}>
          <CText type={'s14'} color={colors.slateGray}>
            {strings.total}
          </CText>
          <View style={localStyles.dotStyle} />
          <CText type={'s14'} color={colors.black}>
            {'5'}
          </CText>
        </View>
      </View>
      <CButton
        title={strings.submitMyPrediction}
        onPress={onPressSubmit}
        textType={'s14'}
        containerStyle={localStyles.buttonStyle}
      />
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  actionSheetStyle: {
    ...styles.ph15,
    ...styles.pt10,
    ...styles.pb20,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  entryTicketsStyle: {
    ...styles.mv10,
    textTransform: 'uppercase',
  },
  bottomTextStyle: {
    ...styles.mt20,
    ...styles.rowSpaceBetween,
    ...styles.mb10,
  },
  dotStyle: {
    height: moderateScale(13),
    width: moderateScale(13),
    borderRadius: moderateScale(6.5),
    backgroundColor: colors.lightYellow,
    ...styles.mh10,
  },
  buttonStyle: {
    width: '100%',
    ...styles.mt10,
    ...styles.mb30,
  },
  entryStyle: {
    width: '100%',
    borderRadius: moderateScale(10),
    ...styles.mv10,
    ...styles.center,
  },
  indicatorStyle: {
    height: moderateScale(40),
    width: '100%',
    backgroundColor: colors.lightPurple,
    position: 'absolute',
    top: moderateScale(68),
  },
});
