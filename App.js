import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScreenOrientation } from 'expo';
import { PlayByPlayContext } from './src/context';
import { playByPlayReducer } from './src/reducers';
import Dashboard from './src/components/Dashboard';

export default function App() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  });

  const [playState, playDispatch] = React.useReducer(playByPlayReducer, { playByPlay: [] });

  return (
    <PlayByPlayContext.Provider value={{ playByPlay: playState.playByPlay, playDispatch }}>
      <View>
        <Text style={{ textAlign: 'center' }}>Hello World!!!</Text>
        <Dashboard />
      </View>
    </PlayByPlayContext.Provider>
  );
}
