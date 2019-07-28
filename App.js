import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoApperance from './components/introduction/LogoApperance';
import CoreValue from './components/introduction/CoreValue';
import SignUp from './components/authentication/SignUp';
import VerifyPhone from './components/authentication/VerifyPhone';
import Home from './components/home/Home';
import UserLocation from './components/authentication/UserLocation';
import Categories from './components/home/Categories'
export default function App() {
  return (
    <Categories/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
