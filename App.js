import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './components/styles';
import { Text, View } from 'react-native';
import Main from './components/MainComponent';
import Router from './components/Router';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    
    <Router />
  );
}

registerRootComponent(App);
