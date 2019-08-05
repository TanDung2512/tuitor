import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import LogoApperance from "../components/introduction/LogoApperance";
import CoreValue from "../components/introduction/CoreValue";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Icon } from 'react-native-elements'

import Home from "../components/home/Home";
import SignUp from '../components/authentication/SignUp';
import SignIn from '../components/authentication/SignIn';
import VerifyPhone from '../components/authentication/VerifyPhone';
import UserLocation from '../components/authentication/UserLocation';
import Categories from '../components/home/Categories'
import Booking from '../components/booking/Booking'
import Account from '../components/account/Account'
import Connect from '../components/connect/Connect'
import Notification from '../components/notification/Notification'

const MainNavigator = createStackNavigator({
    // LogoApperance : {
    //     screen: LogoApperance,
    // },
    // CoreValue : {
    //     screen : CoreValue
    // },    
    SignIn : {
        screen : SignIn,

    },
    SignUp : {
        screen : SignUp,
    },
    Home : {
        screen : Home,
        navigationOptions : {
            header : null,    
            tabBarVisible : true
        }
    },
    VerifyPhone : {
        screen : VerifyPhone
    },
    UserLocation : {
        screen : UserLocation,
    },
    Categories : {
        screen : Categories
    }
});
  
MainNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    for (let i = 0; i < navigation.state.routes.length; i++) {
        route = navigation.state.routes[i].routeName

        if(route == "SignIn" || route == "SignUp" || route == "VerifyPhone") {
            tabBarVisible = false;
        }
        else {
            tabBarVisible = true;
        }
    }
    console.log(tabBarVisible)
    return {
      tabBarVisible
    };
  };
const BookingNavigator = createStackNavigator({

    Booking : {
        screen : Booking,
    },
});

const AccountNavigator = createStackNavigator({
    Account : {
        screen : Account,
    },
});

const ConnectNavigator = createStackNavigator({
    Connect : {
        screen : Connect,
    },
});

const NotificationNavigator = createStackNavigator({
    Notification : {
        screen : Notification,
    },
});
 export default createAppContainer(
   createBottomTabNavigator(
    {
      Search: {screen : MainNavigator},
      Booking: {screen : BookingNavigator},
      Connect : {screen : ConnectNavigator},
      Notification : {screen : NotificationNavigator},
      Account : {screen : AccountNavigator},
    },
    {
      /* Other configuration remains unchanged */
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let navigationOptions = {};
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Search') {
            iconName = `search`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
          } else if (routeName === 'Booking') {
            iconName = `book`;
          } else if (routeName === 'Connect') {
            iconName = `inbox`;
          } else if (routeName === 'Notification'){
            iconName = `notification`;
          } else if (routeName === 'Account'){
            iconName = `profile`;
          }

          // You can return any component that you like here!
          
        return <Icon name={iconName} type = "antdesign" size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }))