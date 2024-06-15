import { date } from 'zod'

const months: { [key: number]: string } = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}

const formatTime = (date: Date) => {
  let hours = date.getHours()
  let mins = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  const minutes = mins < 10 ? '0' + mins : mins
  const strTime = hours + ':' + minutes + ' ' + ampm
  return strTime
}

export const getBeautifulDate = (date: string) => {
  const beautifulDate = new Date(date)

  const beautifulDay = `${beautifulDate.getDate()} ${
    months[beautifulDate.getMonth()]
  }`

  return `${beautifulDay} at ${formatTime(beautifulDate)}`
}

export const getMonthYear = (date: string) => {
  const beautifulDate = new Date(date)

  return `${months[beautifulDate.getMonth()]} ${beautifulDate.getFullYear()}`
}
