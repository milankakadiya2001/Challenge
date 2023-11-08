// Tab Routes
import Home from '../containers/TabBar/Home';
import Leagues from '../containers/TabBar/Leagues';
import Research from '../containers/TabBar/Research';
import Leaderboard from '../containers/TabBar/Leaderboard';
import Profile from '../containers/TabBar/Profile';

// Screens Route
import TabBar from './Type/TabBarNavigation';
import Splash from '../containers/auth/Splash';

export const TabRoute = {
  Home,
  Leagues,
  Research,
  Leaderboard,
  Profile,
};

export const StackRoute = {
  Splash,
  TabBar,
};
