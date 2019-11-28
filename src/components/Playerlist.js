import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ScoresContext } from '../context'

function Player({ id, name, teamName, differences, checkId, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id, name, teamName)}
      style={[
        styles.item,
        { backgroundColor: id === checkId ? '#bbffee' : '#00dd77' },
      ]}
    >
      <Text style={styles.name}>{`${name}    ${differences}`}</Text>
    </TouchableOpacity>
  );
};

export default function Playerlist({ teamName, players, selectedPlayer, onSelect }) {
  const { homeTeamScores, homeTeamDifferences, awayTeamScores, awayTeamDifferences } = React.useContext(ScoresContext);
  const scores = teamName === 'HOME' ? homeTeamScores : awayTeamScores;
  const differences = teamName === 'HOME' ? homeTeamDifferences : awayTeamDifferences;

  return (
    <View style={styles.playerList}>
      <Text style={styles.scores}>{scores}</Text>
      <Text style={styles.title}>{teamName}</Text>
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <Player
            id={item.id}
            name={item.name}
            teamName={teamName}
            differences={differences}
            checkId={selectedPlayer}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selectedPlayer}
      />
    </View>
  );
}

Playerlist.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectedPlayer: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  scores: {
    textAlign: 'center',
    fontSize: 32,
  },
  playerList: {
    flexBasis: '20%',
  },
  title: {
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
  },
  item: {
    padding: 4,
  },
})
