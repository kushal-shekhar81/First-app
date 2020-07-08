import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './components/styles';
import { Text, View } from 'react-native';
import Main from './components/MainComponent';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <Main />
  );
}

registerRootComponent(App);
