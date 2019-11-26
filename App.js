import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScreenOrientation } from 'expo';
import Dashboard from './src/components/Dashboard';

export default function App() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  })

  return (
    <View>
      <Text style={{ textAlign: 'center' }}>Hello World!!!</Text>
      <Dashboard />
    </View>
  );
}
