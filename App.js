import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScreenOrientation } from 'expo';
import { ScoresContext } from './src/context';
import { PlayByPlayProvider } from './src/context/playByPlay';
import { TimerProvider } from './src/context/timer';
import { scoresReducer } from './src/reducers';
import Dashboard from './src/components/Dashboard';

export default function App() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  });

  const initialScoresState = {
    homeTeamScores: 0,
    homeTeamDifferences: 0,
    awayTeamScores: 0,
    awayTeamDifferences: 0,
  };

  const [scoresState, scoresDispatch] = React.useReducer(scoresReducer, initialScoresState);

  return (
    <ScoresContext.Provider value={{ ...scoresState, scoresDispatch }}>
      <PlayByPlayProvider>
        <TimerProvider>
          <View>
            <Text style={{ textAlign: 'center' }}>Hello World!!!</Text>
            <Dashboard />
          </View>
        </TimerProvider>
      </PlayByPlayProvider>
    </ScoresContext.Provider>
  );
}
