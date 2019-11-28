import React from 'react';

export const PlayByPlayContext = React.createContext({
  playByPlay: [],
});

export const ScoresContext = React.createContext({
  homeTeamScores: 0,
  awayTeamScores: 0,
})
