import React from 'react';

export const PlayByPlayContext = React.createContext({
  playByPlay: [],
});

export const ScoresContext = React.createContext({
  homeTeamScores: 0,
  homeTeamDifferences: 0,
  awayTeamScores: 0,
  awayTeamDifferences: 0,
})
