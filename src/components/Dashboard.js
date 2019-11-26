import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { statsTitles } from '../constants/base';
import Playerlist from './Playerlist';
import StatsButtons from './StatsButtons';

const players = {
  player1: {
    id: 'player1',
    name: 'Player1',
  },
  player2: {
    id: 'player2',
    name: 'Player2',
  },
  player3: {
    id: 'player3',
    name: 'Player3',
  },
  player4: {
    id: 'player4',
    name: 'Player4',
  },
  player5: {
    id: 'player5',
    name: 'Player5',
  },
};

const rivalPlayers = {
  rivalPlayers1: {
    id: 'rivalPlayers1',
    name: 'Player1',
  },
  rivalPlayers2: {
    id: 'rivalPlayers2',
    name: 'Player2',
  },
  rivalPlayers3: {
    id: 'rivalPlayers3',
    name: 'Player3',
  },
  rivalPlayers4: {
    id: 'rivalPlayers4',
    name: 'Player4',
  },
  rivalPlayers5: {
    id: 'rivalPlayers5',
    name: 'Player5',
  },
};

export default function Dashboard() {
  const [selectedPlayer, setSelectedPlayer] = React.useState('player1');
  const onSelect = React.useCallback(
    id => {
      setSelectedPlayer(id);
    },
    [selectedPlayer],
  );

  return (
    <View style={styles.container}>
      <Playerlist teamName={'ABC'} players={Object.values(players)} selectedPlayer={selectedPlayer} onSelect={onSelect} />
      <StatsButtons />
      <Playerlist teamName={'DEF'} players={Object.values(rivalPlayers)} selectedPlayer={selectedPlayer} onSelect={onSelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
});
