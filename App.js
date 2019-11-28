import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScreenOrientation } from 'expo';
import { ScoresContext, PlayByPlayContext } from './src/context';
import { scoresReducer, playByPlayReducer } from './src/reducers';
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
  const [playsState, playsDispatch] = React.useReducer(playByPlayReducer, { playByPlay: [] });


  return (
    <ScoresContext.Provider value={{...scoresState, scoresDispatch }}>
      <PlayByPlayContext.Provider value={{ playByPlay: playsState.playByPlay, playsDispatch }}>
        <View>
          <Text style={{ textAlign: 'center' }}>Hello World!!!</Text>
          <Dashboard />
        </View>
      </PlayByPlayContext.Provider>
    </ScoresContext.Provider>
  );
}
