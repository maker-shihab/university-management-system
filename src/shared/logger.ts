import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf, prettyPrint } = format

// Function Declaretion
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  let hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  let meridiem = 'AM'
  if (hour > 12) {
    hour -= 12
    meridiem = 'PM'
  }

  return `${date.toDateString()} ${hour}:${minutes}:${seconds}:${meridiem} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
    new transports.Console(),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
    new transports.Console(),
  ],
})

export { errorLogger, logger }
