export const getDuration = (timeInMs: number): string => {
  const durationInMinutes = Math.floor(timeInMs / 60000);
  const durationInSeconds = ((timeInMs % 60000) / 1000).toFixed(0);
  return `${durationInMinutes}:${durationInSeconds.padStart(2, '0')}`

}