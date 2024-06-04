export const calculateDuration = (secs: number): string => {
  const minutes = Math.floor(secs / 60);
  const returnedMins = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = Math.floor(secs % 60);
  const returnedSecs = seconds < 10 ? `0${seconds}` : seconds;
  return `${returnedMins}:${returnedSecs}`;
};