import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🥌 Database connected successfully')

    app.listen(config.port, () => {
      logger.info(`UMP listen on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`Failed to connect database ${error}`)
  }
}
main()
