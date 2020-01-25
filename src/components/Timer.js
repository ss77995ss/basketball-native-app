import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useTimerState, useTimerDispatch } from '../context/timerContext';
import Button from './Button';

export default function Timer() {
  const { times } = useTimerState();
  const dispatch = useTimerDispatch();
  const [timerOn, setTimerOn] = React.useState(false);
  const [intervalId, setIntervalId] = React.useState();

  const displayTimer = (timesLeft) => {
    const minutes = Math.floor((timesLeft / 1000 / 60) % 60).toString();
    const seconds = Math.floor((timesLeft / 1000) % 60).toString();
    const milliseconds = `0${Math.floor((timesLeft / 10) % 100)}`.slice(-2);

    if (seconds.length > 1) return `${minutes}:${seconds}:${milliseconds}`

    return `${minutes}:0${seconds}:${milliseconds}`
  };

  const handlePress = React.useCallback(() => {
    setTimerOn(prevTimerOn => !prevTimerOn);
  }, []);

  React.useEffect(() => {
    if (times > 0 && timerOn) {
      const interval = setInterval(() => {
        dispatch({type: 'DECREASE_ONE_SECOND'});
      }, 10);
      setIntervalId(interval);
      return () => clearInterval(intervalId);
    } else {
      return () => clearInterval(intervalId);
    }
  });

  return (
    <View style={styles.container}>
      <Text>{displayTimer(times)}</Text>
      <Button text="⏯" onPress={() => handlePress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '15%',
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
