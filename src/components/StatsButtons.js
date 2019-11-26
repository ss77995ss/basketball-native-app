import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet } from 'react-native';
import { statsTitles } from '../constants/base';

export default function StatsButtons() {
  const renderButtons = Object.values(statsTitles).map(
    statTitle => (
      <View key={statTitle} style={styles.button}>
        <Button color="#fff" title={statTitle} />
      </View>
    )
  );

  return (
    <View style={styles.buttons}>
      {renderButtons}
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexBasis: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    marginVertical: 4,
    backgroundColor: '#5555ff',
    borderStyle: 'solid',
    borderRadius: 10,
  }
});
