import 'regenerator-runtime/runtime'
import ServerConfig from './config/server.config'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import ConfigService from './service/config.service'
import mkdirp from 'mkdirp'
import winston from 'winston'
import winstonDaily from 'winston-daily-rotate-file'
import 'date-utils'
import chalk from 'chalk'
import allAdvice from './middleware/allAdvice'
import PostUpService from './service/postup.service'
import EventEmitter from 'events'

const { combine, timestamp, printf } = winston.format
export const emitterPost = new EventEmitter()

export async function main() {
    // env init --------------------------------------------------------------------------------------------------------
    const env = ConfigService.NODE_ENV
    if (env.match('dev|test|stg|stg-bat|prd|prd-bat') === false) {
        throw new Error('env must be dev or prd')
    }

    // load env file ---------------------------------------------------------------------------------------------------
    // default 로드 => 환경별 env 파일 로드 후 덮어씌우기
    dotenv.config({ path: path.join(__dirname, `./config/config.default.env`) })
    const envConfig = dotenv.parse(
        fs.readFileSync(path.join(__dirname, `./config/config.${env}.env`))
    )
    for (const key in envConfig) {
        process.env[key] = envConfig[key]
    }

    if (
        fs.existsSync(path.join(__dirname, `./config/secure/config.${env}.env`))
    ) {
        const envSecureConfig = dotenv.parse(
            fs.readFileSync(
                path.join(__dirname, `./config/secure/config.${env}.env`)
            )
        )
        for (const key in envSecureConfig) {
            process.env[key] = envSecureConfig[key]
        }
    } else {
        process.env['isSecureEnv'] = false
        console.error(
            'there is no secure env => must have secure env file for DB Connect at ./config/secure/..'
        )
    }

    // logger 셋팅 ------------------------------------------------------------------------------------------------------
    mkdirp.sync(path.join(process.env.LOG_DIR))
    let logLevel = env === 'dev' ? 'debug' : 'info'

    global.logger = new winston.createLogger({
        format: combine(
            timestamp({
                format: 'YYMMDD:HHmmss.SSS',
            }),
            printf(info => {
                let logLevel = info.level.padEnd(5, ' ')
                if (info.level === 'debug') {
                    logLevel = chalk.gray(logLevel)
                } else {
                    logLevel = chalk.yellow(logLevel)
                }
                return `[${chalk.cyan(info.timestamp)}:${logLevel}] ${
                    info.message
                }`
            })
        ),
        transports: [
            new winston.transports.Console({
                level: logLevel,
            }),
            new winstonDaily({
                level: logLevel,
                datePattern: 'YYYYMMDD',
                dirname: process.env.LOG_DIR,
                filename: `%DATE%.log`,
                maxFiles: 30,
                zippedArchive: true,
            }),
            new winstonDaily({
                level: 'error',
                datePattern: 'YYYYMMDD',
                dirname: `${process.env.LOG_DIR}/error`,
                filename: `%DATE%.error.log`,
                maxFiles: 30,
                zippedArchive: true,
            }),
        ],
    })

    logger.debug('main start')

    const server = await new ServerConfig({
        port: process.env.PORT || 8000,
        controllerPath: path.join(__dirname, './controllers'),
        apiPath: path.join(__dirname, './api'),
        batchPath: path.join(__dirname, './batch'),
        middlewares: [allAdvice],
    })

    const app = await server.listen()
    emitterPost.emit('post')
    logger.debug('main end')

    return app
}

emitterPost.on('post', async () => {
    logger.info('post event')
    const servicePostUp = new PostUpService()
    await servicePostUp.postUp()
})

const app = main()

module.exports = app
module.exports.app = app
module.exports.emitterPost = emitterPost
