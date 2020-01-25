import React from 'react';

const TimerStateContext = React.createContext();
const TimerDispatchContext = React.createContext();

function timerReducer(state, action) {
  switch(action.type) {
    case 'DECREASE_ONE_SECOND': {
      return {
        times: state.times - 10,
      };
    }
    default: new Error('Timer reducer error: Missing action');
  }
};

function TimerProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    timerReducer,
    { times: 1000 * 60 * 10 },
  );

  return (
    <TimerStateContext.Provider value={state}>
      <TimerDispatchContext.Provider value={dispatch}>
        {children}
      </TimerDispatchContext.Provider>
    </TimerStateContext.Provider>
  );
};

function useTimerState() {
  const context = React.useContext(TimerStateContext);
  if (context === undefined) {
    throw new Error('useTimerState must be used within a TimerProvider');
  }
  return context;
};

function useTimerDispatch() {
  const context = React.useContext(TimerDispatchContext);
  if (context === undefined) {
    throw new Error('TimerDispatchContext must be used within a TimerProvider');
  }
  return context;
};

export { TimerProvider, useTimerState, useTimerDispatch };
