import React from 'react';
import { displayTimer } from '../utils';

const PlayByPlayStateContext = React.createContext();
const PlayByPlayDispatchContext = React.createContext();

function playByPlayReducer(state, action) {
  switch(action.type) {
    case 'ADD_RECORD': {
      const play = `${action.player} ${action.stat} ${displayTimer(action.time)}`;

      switch(action.teamName) {
        case 'HOME':
          return {
            playByPlay: state.playByPlay.concat({ home: play, away: '' }),
          };
        case 'AWAY':
          return {
            playByPlay: state.playByPlay.concat({ home: '', away: play }),
          };
        default:
          throw new Error();
      }
    }
    default:
      throw new Error();
  }
};

function PlayByPlayProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    playByPlayReducer,
    {
      playByPlay: [],
    },
  );

  return (
    <PlayByPlayStateContext.Provider value={state}>
      <PlayByPlayDispatchContext.Provider value={dispatch}>
        {children}
      </PlayByPlayDispatchContext.Provider>
    </PlayByPlayStateContext.Provider>
  );
};

function usePlayByPlayState() {
  const context = React.useContext(PlayByPlayStateContext);
  if (context === undefined) {
    throw new Error('usePlayByPlayState must be used within a PlayByPlayProvider');
  }
  return context;
};

function usePlayByPlayDispatch() {
  const context = React.useContext(PlayByPlayDispatchContext);
  if (context === undefined) {
    throw new Error('PlayByPlayDispatchContext must be used within a PlayByPlayProvider');
  }
  return context;
};

export { PlayByPlayProvider, usePlayByPlayState, usePlayByPlayDispatch };
