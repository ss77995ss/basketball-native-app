export function displayTimer(timesLeft) {
  const minutes = `0${Math.floor((timesLeft / 1000 / 60) % 60)}`.slice(-2);
  const seconds = `0${Math.floor((timesLeft / 1000) % 60)}`.slice(-2);

  return `${minutes}:${seconds}`
};
