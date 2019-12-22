import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Button from './Button';
import PlayByPlay from './PlayByPlay';
import { statsTitles } from '../constants/base';
import { ScoresContext, PlayByPlayContext } from '../context';

export default function StatsButtons({ selectedPlayerInfo }) {
  const { scoresDispatch } = React.useContext(ScoresContext);
  const { playByPlay, playsDispatch } = React.useContext(PlayByPlayContext);
  const onPress = React.useCallback(
    (stat, { name, teamName}) => {
      switch(stat) {
        case statsTitles.twoPointsMade: {
          scoresDispatch({ type: 'INCREASE_SCORES', teamName, scores: 2 });
          scoresDispatch({ type: 'MODIFY_DIFFERENCES', teamName, scores: 2 });
          break;
        }
        case statsTitles.threePointsMade: {
          scoresDispatch({ type: 'INCREASE_SCORES', teamName, scores: 3 });
          scoresDispatch({ type: 'MODIFY_DIFFERENCES', teamName, scores: 3 });
          break;
        }
        case statsTitles.freeThrowMade: {
          scoresDispatch({ type: 'INCREASE_SCORES', teamName, scores: 1 });
          scoresDispatch({ type: 'MODIFY_DIFFERENCES', teamName, scores: 1 });
          break;
        }
        default: break;
      }

      playsDispatch({ type: 'ADD_RECORD', teamName, player: name, stat });
    },
    [playByPlay],
  );

  const renderButtons = Object.values(statsTitles).map(
    statTitle => (
      <Button
        key={statTitle}
        style={styles.button}
        text={statTitle}
        textStyle={styles.buttonText}
        onPress={() => onPress(statTitle, selectedPlayerInfo)}
      />
    )
  );

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text>Timer</Text>
      </View>
      <View style={styles.buttons}>
        {renderButtons}
      </View>
      <PlayByPlay data={playByPlay} />
    </View>
  )
};

StatsButtons.propTypes = {
  selectedPlayerInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teamName: PropTypes.string.isRequired,
  }).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },
  timer: {
    height: '15%',
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 4,
    padding: 4,
    backgroundColor: '#5555ff',
    borderStyle: 'solid',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
