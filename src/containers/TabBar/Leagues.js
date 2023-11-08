// Libraries Imports
import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import {
  AboutInfoIcon,
  ChartIcon,
  DownArrowIcon,
  PlayerIcon,
  TimeIcon,
  UpArrowIcon,
} from '../../assets/svgs';
import CButton from '../../components/common/CButton';
import PredictionModal from '../../components/modal/PredictionModal';

export default function Leagues() {
  const predictionRef = useRef(null);
  const [predictionStatus, setPredictionStatus] = useState('');
  const SubComponent = ({title, value, isDot = false}) => {
    return (
      <View style={localStyles.subComponentContainer}>
        <CText type={'m14'} style={styles.mb5} color={colors.grayishBlue}>
          {title}
        </CText>
        <View style={styles.rowCenter}>
          <CText type={'m16'} numberOfLines={1} color={colors.black}>
            {value}
          </CText>
          {isDot && <View style={localStyles.dotStyle} />}
        </View>
      </View>
    );
  };

  const onPressUnder = () => {
    setPredictionStatus(strings.under);
    predictionRef.current?.show();
  };

  const onPressOver = () => {
    setPredictionStatus(strings.over);
    predictionRef.current?.show();
  };

  return (
    <CSafeAreaView>
      <View style={styles.ph15}>
        <CText type={'b16'} style={styles.mv10}>
          {strings.todaysMatches}
        </CText>
        <ImageBackground
          source={images.todayGameBg}
          style={localStyles.todayGameBgStyle}>
          <View style={localStyles.topTextContainer}>
            <View style={styles.rowStart}>
              <CText type={'s14'} color={colors.lavender}>
                {strings.underOrOver}
              </CText>
              <AboutInfoIcon style={styles.ml5} />
            </View>
            <View style={styles.rowStart}>
              <CText type={'m14'} numberOfLines={1} color={colors.pastelPurple}>
                {strings.startingIn}
              </CText>
              <TimeIcon style={styles.mh5} />
              <CText type={'m16'} numberOfLines={1} color={colors.pastelPurple}>
                {'03:23:12'}
              </CText>
            </View>
          </View>
          <View style={styles.ph15}>
            <CText type={'m16'} numberOfLines={1} color={colors.lavender}>
              {strings.bitcoinPrice}
            </CText>
            <CText
              type={'m16'}
              numberOfLines={1}
              style={styles.mb15}
              color={colors.white}>
              {'$24,524 at 7 a ET on 22nd Jan’21'}
            </CText>
          </View>
        </ImageBackground>
        <View style={localStyles.centerContainer}>
          <View style={localStyles.centerInnerStyle}>
            <View style={styles.rowSpaceBetween}>
              <SubComponent title={strings.prizePool} value={'$ 12,000'} />
              <SubComponent title={strings.under} value={'3.25x'} />
              <SubComponent title={strings.over} value={'1.25x'} />
              <SubComponent title={strings.entryFees} value={'5'} isDot />
            </View>
            <CText
              type={'s14'}
              numberOfLines={1}
              style={styles.mt15}
              color={colors.slateGray}>
              {strings.whatYourPrediction}
            </CText>
            <View style={localStyles.btnOuterContainer}>
              <CButton
                title={strings.under}
                textType={'s14'}
                color={colors.white}
                style={styles.ml5}
                containerStyle={localStyles.btnContainer}
                bgColor={colors.darkPurple}
                frontIcon={<DownArrowIcon />}
                onPress={onPressUnder}
              />
              <CButton
                title={strings.over}
                textType={'s14'}
                color={colors.white}
                style={styles.ml5}
                containerStyle={localStyles.btnContainer}
                frontIcon={<UpArrowIcon />}
                onPress={onPressOver}
              />
            </View>
          </View>

          <View style={localStyles.bottomContainer}>
            <View style={styles.rowSpaceBetween}>
              <CText type={'s14'} color={colors.slateGray}>
                <PlayerIcon style={styles.mr5} /> {'355 '} {strings.players}
              </CText>
              <CText type={'s14'} color={colors.slateGray}>
                <ChartIcon style={styles.mr5} /> {strings.viewChart}
              </CText>
            </View>
            <View style={localStyles.progressBarStyle}>
              <View style={localStyles.innerProgressStyle} />
            </View>
            <View style={styles.rowSpaceBetween}>
              <CText type={'s14'} color={colors.grayishBlue}>
                {'232 '} {strings.predictedUnder}
              </CText>
              <CText type={'s14'} color={colors.grayishBlue}>
                {'123 '} {strings.predictedOver}
              </CText>
            </View>
          </View>
        </View>
      </View>
      <PredictionModal
        SheetRef={predictionRef}
        predictionStatus={predictionStatus}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  todayGameBgStyle: {
    width: '100%',
    overflow: 'hidden',
    resizeMode: 'cover',
    gap: moderateScale(20),
  },
  topTextContainer: {
    ...styles.ph15,
    ...styles.rowSpaceBetween,
    ...styles.pt15,
  },
  centerContainer: {
    backgroundColor: colors.white,
    ...styles.shadowStyle,
  },
  centerInnerStyle: {
    ...styles.p15,
  },
  dotStyle: {
    height: moderateScale(13),
    width: moderateScale(13),
    borderRadius: moderateScale(6.5),
    backgroundColor: colors.lightYellow,
    ...styles.ml5,
  },
  btnOuterContainer: {
    ...styles.pt15,
    ...styles.rowSpaceBetween,
  },
  btnContainer: {
    width: '47%',
  },
  bottomContainer: {
    backgroundColor: colors.lightPink,
    ...styles.p15,
  },
  progressBarStyle: {
    width: '100%',
    height: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: colors.success,
    ...styles.mv10,
  },
  innerProgressStyle: {
    height: moderateScale(10),
    width: '74%',
    zIndex: 10,
    borderRadius: moderateScale(5),
    backgroundColor: colors.pantone,
  },
});
