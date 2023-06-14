import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🥌 Database connected successfully')

    server = app.listen(config.port, () => {
      logger.info(`UMP listen on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`Failed to connect database ${error}`)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
main()

process.on('SIGABRT', () => {
  logger.info('SIGTERM is Received')
  if (server) {
    server.close()
  }
})
