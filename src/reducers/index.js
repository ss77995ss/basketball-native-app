export function playByPlayReducer(state, action) {
  switch(action.type) {
    case 'ADD_RECORD': {
      const play = `${action.teamName} ${action.player} ${action.stat}`;
      return { playByPlay: state.playByPlay.concat(play) };
    }
    default:
      throw new Error();
  }
};

export function scoresReducer(state, action) {
  switch(action.type) {
    case 'INCREASE_SCORES': {
      switch(action.teamName) {
        case 'HOME': {
          return {  ...state, homeTeamScores: state.homeTeamScores + action.scores };
        }
        case 'AWAY': {
          return {  ...state, awayTeamScores: state.awayTeamScores + action.scores };
        }
        default:
          return state;
      }
    }
    case 'MODIFY_DIFFERENCES': {
      switch(action.teamName) {
        case 'HOME': {
          return {
            ...state,
            homeTeamDifferences: state.homeTeamDifferences + action.scores,
            awayTeamDifferences: state.awayTeamDifferences - action.scores,
          };
        }
        case 'AWAY': {
          return {
            ...state,
            homeTeamDifferences: state.homeTeamDifferences - action.scores,
            awayTeamDifferences: state.awayTeamDifferences + action.scores,
          };
        }
        default:
          return state;
      }
    }
    default: new Error();
  }
}
