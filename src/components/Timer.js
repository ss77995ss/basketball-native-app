import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { quarters } from '../constants/base';
import { useTimerState, useTimerDispatch } from '../context/timerContext';
import Button from './Button';

export default function Timer() {
  const { times, quarter } = useTimerState();
  const dispatch = useTimerDispatch();
  const [timerOn, setTimerOn] = React.useState(false);

  const displayTimer = (timesLeft) => {
    const minutes = `0${Math.floor((timesLeft / 1000 / 60) % 60)}`.slice(-2);
    const seconds = `0${Math.floor((timesLeft / 1000) % 60)}`.slice(-2);

    return `${minutes}:${seconds}`
  };

  const quarterButtons = () => Object.values(quarters).map(qtr => (
    <Button
      key={`${qtr}-button`}
      style={styles.timerButtonText}
      text={qtr}
      onPress={() => dispatch({ type: 'SET_QUARTER', quarter: qtr })}
    />
  ));

  const handlePress = React.useCallback(() => {
    setTimerOn(prevTimerOn => !prevTimerOn);
  }, []);

  React.useEffect(() => {
    if (times > 0 && timerOn) {
      const timeout = setTimeout(() => {
        dispatch({ type: 'DECREASE_TIMES', times: 1000 });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  });

  return (
    <View style={styles.container}>
      <Text>{`${quarter} QTR ${displayTimer(times)}`}</Text>
      <Button text="⏯" onPress={handlePress} />
      <View style={styles.timerButtons}>
        {quarterButtons()}
      </View>
      <View style={styles.timerButtons}>
        <Button text="+1" onPress={() => dispatch({ type: 'INCREASE_TIMES', times: 1000 })} />
        <Text style={styles.timerButtonText}>Second</Text>
        <Button text="-1" onPress={() => dispatch({ type: 'DECREASE_TIMES', times: 1000 })} />
      </View>
      <View style={styles.timerButtons}>
        <Button text="+1" onPress={() => dispatch({ type: 'INCREASE_TIMES', times: 60000 })} />
        <Text style={styles.timerButtonText}>Minute</Text>
        <Button text="-1" onPress={() => dispatch({ type: 'DECREASE_TIMES', times: 60000 })} />
      </View>
      <Button text="RESET" onPress={() => dispatch({ type: 'RESET_TIMES', times: 1000 * 60 * 10 })} />
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
  timerButtons: {
    flexDirection: 'row',
  },
  timerButtonText: {
    marginHorizontal: 8,
  },
})
