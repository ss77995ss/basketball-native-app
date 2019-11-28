import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { statsTitles } from '../constants/base';
import { PlayByPlayContext } from '../context';

export default function StatsButtons({ selectedPlayerInfo }) {
  const { playByPlay, playDispatch } = React.useContext(PlayByPlayContext);
  const onPress = React.useCallback(
    (stat, { name, teamName}) => {
      playDispatch({ type: 'ADD_RECORD', teamName, player: name, stat });
    },
    [playByPlay],
  );

  const renderButtons = Object.values(statsTitles).map(
    statTitle => (
      <View key={statTitle} style={styles.button}>
        <Button color="#fff" title={statTitle} onPress={() => onPress(statTitle, selectedPlayerInfo)} />
      </View>
    )
  );
  const renderPlayByPlay = playByPlay.map((play, index) => (
    <Text key={`${play}-${index}`} style={styles.play}>{play}</Text>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        {renderButtons}
      </View>
      <ScrollView
        style={styles.playByPlay}
        ref={ref => this.scrollView = ref}
        onContentSizeChange={(contentWidth, contentHeight)=>{
            this.scrollView.scrollToEnd({animated: true});
        }}
      >
        {renderPlayByPlay}
      </ScrollView>
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
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    marginVertical: 4,
    backgroundColor: '#5555ff',
    borderStyle: 'solid',
    borderRadius: 10,
  },
  playByPlay: {
    marginTop: 8,
    maxHeight: '42%',
  },
  play: {
    textAlign: 'center',
    fontSize: 16,
  },
});
