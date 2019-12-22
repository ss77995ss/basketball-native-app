import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

export default function PlayByPlay({ data }) {
  const renderPlayByPlay = playByPlay => playByPlay.map((play, index) => (
    <View style={styles.container}>
      <Text key={`${play.home}-${index}`} style={styles.play}>{play.home}</Text>
      <Text key={`${play.away}-${index}`} style={styles.play}>{play.away}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.playByPlay}
        ref={ref => this.scrollView = ref}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({animated: false});
        }}
      >
        {renderPlayByPlay(data)}
      </ScrollView>
    </View>
  );
};

PlayByPlay.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    home: PropTypes.string,
    away: PropTypes.string,
  })).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  teamName: {
    textAlign: 'center',
  },
  playByPlay: {
    marginTop: 8,
    borderTopWidth: 4,
    borderTopColor: '#ccc',
  },
  play: {
    height: 28,
    width: '50%',
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
  },
});
