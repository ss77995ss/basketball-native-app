export function playByPlayReducer(state, action) {
  switch(action.type) {
    case 'ADD_RECORD': {
      const play = `${action.player} ${action.stat}`;
      return { playByPlay: state.playByPlay.concat(play) };
    }
    default:
      throw new Error();
  }
};
