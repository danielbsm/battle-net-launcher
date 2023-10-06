const convertMsInTimeAgo = (time) => {
  const timeNow = new Date().getTime()
  const subTime = timeNow - time
  const convertToSeconds = subTime / 1000
  const seconds = convertToSeconds >= 1 ? convertToSeconds : 1
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24
  if (days >= 1) {
    return `${Math.floor(days)} dia(s) atrás.`
  }
  if (hours >= 1) {
    return `${Math.floor(hours)} hora(s) atrás.`
  }
  if (minutes >= 1) {
    return `${Math.floor(minutes)} minutos(s) atrás.`
  } else {
    return `${Math.floor(seconds)} segundo(s) atrás.`
  }
}
export default convertMsInTimeAgo
