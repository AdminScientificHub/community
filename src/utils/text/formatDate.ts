import moment from 'moment'

export const formatToFromNow = (timestamp: string): string => {
  return moment.utc(timestamp).fromNow()
}

export const formatToDate = (timestamp: string): string => {
  return moment.utc(timestamp).format('MMM DD')
}
