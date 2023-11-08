// Library import
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Local import
import {TabRoute} from '../NavigationRoutes';
import {TabNav} from '../NavigationKeys';
import {checkPlatform} from '../../utils/helpers';
import {getHeight, moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {
  Home_Dark,
  Home_Light,
  LeaderboardDark,
  LeaderboardLight,
  LeaguesDark,
  LeaguesLight,
  ProfileDark,
  ProfileLight,
  ResearchDark,
  ResearchLight,
} from '../../assets/svgs';
import {colors, styles} from '../../themes';

export default function TabBarNavigation({navigation}) {
  const Tab = createBottomTabNavigator();
  const iconSize = moderateScale(24);

  const TabText = ({text, focused, icon}) => (
    <View style={localStyles.tabViewContainer}>
      {icon}
      {!!text && (
        <CText
          type={focused ? 's10' : 'm10'}
          numberOfLines={1}
          style={styles.mt5}
          color={focused ? colors.primary : colors.black}>
          {text}
        </CText>
      )}
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: localStyles.tabBarStyle,
        tabBarShowLabel: false,
      }}
      initialRouteName={TabNav.Home}>
      <Tab.Screen
        name={TabNav.Home}
        component={TabRoute.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.home}
              focused={focused}
              icon={focused ? <Home_Dark /> : <Home_Light />}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Leagues}
        component={TabRoute.Leagues}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.leagues}
              focused={focused}
              icon={focused ? <LeaguesDark /> : <LeaguesLight />}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Research}
        component={TabRoute.Research}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.research}
              focused={focused}
              icon={focused ? <ResearchDark /> : <ResearchLight />}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Leaderboard}
        component={TabRoute.Leaderboard}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.leaderboard}
              focused={focused}
              icon={focused ? <LeaderboardDark /> : <LeaderboardLight />}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.Profile}
        component={TabRoute.Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              text={strings.profile}
              focused={focused}
              icon={focused ? <ProfileDark /> : <ProfileLight />}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyles = StyleSheet.create({
  tabBarStyle: {
    height: checkPlatform() === 'ios' ? getHeight(100) : getHeight(70),
    ...styles.ph10,
    backgroundColor: colors.white,
  },
  tabViewContainer: {
    ...styles.center,
  },
});
