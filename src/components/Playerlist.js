import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

function Player({ id, name, checkId, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: id === checkId ? '#bbffee' : '#00dd77' },
      ]}
    >
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default function Playerlist({ teamName, players, selectedPlayer, onSelect }) {
  return (
    <View style={styles.playerList}>
      <Text style={styles.title}>{teamName}</Text>
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <Player
            id={item.id}
            name={item.name}
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
