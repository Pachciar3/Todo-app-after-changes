export default function createDate(timestamp) {
  const month = [
    "January", "February ", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
  function prepareTime(time) {
    return `${time > 9 ? time : '0' + time}`;
  }
  const date = new Date(timestamp);


  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}, ${prepareTime(date.getHours())}:${prepareTime(date.getMinutes())}:${prepareTime(
    date.getSeconds(),
  )}`;
}