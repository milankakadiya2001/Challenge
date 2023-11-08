// Libraries Imports
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import {getHeight, moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {
  ChatIcon,
  EditIcon,
  GreenArrowIcon,
  LogOutIcon,
  RedArrowIcon,
  StatusIcon,
} from '../../assets/svgs';
import CButton from '../../components/common/CButton';
import BadgesComponent from '../../components/BadgesComponent';
import {tabViewData} from '../../api/constant';
import GamesPlayed from '../../components/GamesPlayed';

export default function Home({navigation}) {
  const [isSelect, setIsSelect] = useState(1);

  const handleIndexChange = index => setIsSelect(index);

  const HeaderCetegoryItem = ({title, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleIndexChange(index)}
        style={[
          localStyles.tabStyle,
          {
            borderBottomColor:
              isSelect === index ? colors.primary : colors.white,
          },
        ]}>
        <CText
          type={isSelect === index ? 's14' : 'm14'}
          align={'center'}
          style={localStyles.tabTextStyle}
          color={isSelect === index ? colors.primary : colors.slateGray}>
          {title}
        </CText>
      </TouchableOpacity>
    );
  };

  const TopTabComponent = () => {
    return (
      <View style={localStyles.tabContainer}>
        {tabViewData.map((item, index) => {
          return <HeaderCetegoryItem title={item} index={index} />;
        })}
      </View>
    );
  };

  const RenderScene = () => {
    if (isSelect == 0) {
      return <GamesPlayed />;
    } else {
      return <BadgesComponent />;
    }
  };

  return (
    <CSafeAreaView>
      <ScrollView>
        <View style={localStyles.topContainer}>
          <View style={localStyles.headerContainer}>
            <Image source={images.aapLogo} style={localStyles.logoStyle} />
            <CText type={'m14'} color={colors.slateGray}>
              {strings.profile}
            </CText>
            <View>
              <ChatIcon />
              <View style={localStyles.notificationContainer}>
                <CText type={'r10'} align={'center'} color={colors.white}>
                  {'1'}
                </CText>
              </View>
            </View>
          </View>
          <ImageBackground
            source={images.userPicture}
            style={localStyles.userPicStyle}>
            <TouchableOpacity style={localStyles.editContainer}>
              <EditIcon height={moderateScale(12)} width={moderateScale(12)} />
            </TouchableOpacity>
          </ImageBackground>
          <CText
            type={'m14'}
            align={'center'}
            style={styles.mt10}
            color={colors.charcoalGray}>
            {'Jina Simons'}
          </CText>
          <CText
            type={'m14'}
            align={'center'}
            style={styles.mt5}
            color={colors.slateGray}>
            {'6000 Pts'}
          </CText>
          <CText type={'m14'} style={styles.mt10} color={colors.slateGray}>
            {strings.userBio}
          </CText>
          <CButton
            title={strings.logOut}
            textType={'m14'}
            style={styles.ml5}
            color={colors.slateGray}
            containerStyle={localStyles.logOutContainer}
            frontIcon={
              <LogOutIcon
                height={moderateScale(20)}
                width={moderateScale(20)}
              />
            }
            bgColor={colors.white}
          />
          <View style={localStyles.statusContainer}>
            <View style={localStyles.statusIconStyle}>
              <StatusIcon />
            </View>
            <View style={localStyles.statusInnerContainer}>
              <CText type={'s14'} color={colors.slateGray}>
                {strings.underOrOver}
              </CText>
              <View style={styles.rowStart}>
                <GreenArrowIcon />
                <CText type={'b24'} style={styles.ml10} color={colors.charcoal}>
                  {'81%'}
                </CText>
              </View>
            </View>
            <View style={localStyles.statusInnerContainer}>
              <CText type={'s14'} color={colors.slateGray}>
                {strings.top5}
              </CText>
              <View style={styles.rowStart}>
                <RedArrowIcon />
                <CText type={'b24'} style={styles.ml10} color={colors.charcoal}>
                  {'-51%'}
                </CText>
              </View>
            </View>
          </View>
        </View>
        <TopTabComponent />
        <RenderScene />
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  topContainer: {
    ...styles.ph15,
  },
  headerContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mv20,
  },
  logoStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    resizeMode: 'contain',
  },
  notificationContainer: {
    height: moderateScale(16),
    width: moderateScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: colors.primary,
    ...styles.center,
    position: 'absolute',
    top: moderateScale(-6),
    right: moderateScale(-6),
  },
  userPicStyle: {
    height: moderateScale(75),
    width: moderateScale(75),
    borderRadius: moderateScale(75 / 2),
    resizeMode: 'contain',
    ...styles.selfCenter,
    ...styles.mt10,
  },
  editContainer: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(12),
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderColor: colors.paleLavender,
    ...styles.center,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  logOutContainer: {
    height: moderateScale(26),
    borderRadius: moderateScale(20),
    ...styles.mt15,
    ...styles.selfCenter,
    ...styles.ph15,
  },
  statusContainer: {
    borderWidth: moderateScale(1),
    borderColor: colors.paleLavender,
    borderRadius: moderateScale(5),
    ...styles.rowSpaceBetween,
    ...styles.p20,
    ...styles.mt40,
  },
  statusInnerContainer: {
    gap: moderateScale(10),
    width: '50%',
  },
  statusIconStyle: {
    width: '100%',
    position: 'absolute',
    top: moderateScale(-16),
    ...styles.center,
    ...styles.ml5,
    ...styles.selfCenter,
  },
  tabStyle: {
    borderBottomWidth: moderateScale(2),
    width: '50%',
  },
  tabContainer: {
    ...styles.rowSpaceAround,
    ...styles.pt25,
    ...styles.mt40,
    width: '100%',
    borderTopWidth: moderateScale(4),
    borderTopColor: colors.primaryLight,
  },
  tabTextStyle: {
    paddingBottom: getHeight(25),
  },
});
