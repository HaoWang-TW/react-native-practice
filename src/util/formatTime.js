export const formatTime = function (timeStr) {
  const time = new Date(timeStr);
  const year = time.getFullYear();
  const month = (`0${time.getMonth() + 1}`).slice(-2);
  const day = (`0${time.getDate() + 1}`).slice(-2);
  return [year, month, day].join('-');
};
