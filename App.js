import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';

import MainNavigator from './navigators/MainNavigator';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import SearchResult from './components/home/SearchResult'
import CheckDetail from './components/home/CheckDetail'
import ReviewBooking from './components/home/ReviewBooking';

export default function App() {
  
  return (

    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
    <Layout style={{flex: 1}}>
    <MainNavigator/>
    </Layout>
    </ApplicationProvider>
     
  );
}
