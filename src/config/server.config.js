import Express from 'express'
import helmet from 'helmet'
import path from 'path'
import ConfigService from '../service/config.service'
import readReadSync from 'recursive-readdir-sync'
import expHbs from 'express-handlebars'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import schedule from 'node-schedule'
import { Sequelize } from 'sequelize'

export default class ServerConfig {
    constructor({ port, middlewares, controllerPath, apiPath, batchPath }) {
        this.app = Express()
        this.app.use(cors())
        this.app.set('env', ConfigService.NODE_ENV)
        this.app.set('port', port)
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())

        this.app.use(helmet())
        this.setViewEngine()
        this.setMongo()
        this.setPg()

        middlewares.forEach(middleware => {
            this.registerMiddleware(middleware)
        })

        try {
            this.bindController(controllerPath)
            this.bindController(apiPath)
            this.bindBatch(batchPath)
        } catch (err) {
            throw new Error(`controller bind error occurred: ${err}`)
        }

        this.app.use((err, req, res, next) => {
            res.status(500)
            res.json({
                error: {
                    message: err.message,
                    detail: err,
                },
            })
        })
    }

    get port() {
        return this.app.get('port')
    }

    set port(number) {
        this.app.set('port', number)
    }

    registerMiddleware(middleware) {
        this.app.use(middleware)
        return this
    }

    bindController(controllerPath) {
        const controllers = path.join(controllerPath)
        logger.info(`controller bind start at ${controllerPath}`)

        readReadSync(controllers)
            .filter(file => file.split('.').pop() === 'js')
            .forEach(file => {
                try {
                    logger.info(`route bind: ${file}`)
                    const router = require(file).initRouter()
                    this.app.use(router.baseUrl, router.router)
                } catch (err) {
                    throw new Error(`${file}:${err}`)
                }
            })
    }

    bindBatch(batchPath) {
        const controllers = path.join(batchPath)
        logger.info(`batch bind start at ${batchPath}`)

        readReadSync(controllers)
            .filter(file => file.split('.').pop() === 'js')
            .forEach(file => {
                try {
                    logger.info(`batch bind: ${file}`)
                    const batch = require(file).initBatch()
                    // cron.schedule(batch.schedule, batch.task)
                    if (batch.isUse !== false) {
                        schedule.scheduleJob(batch.schedule, batch.task)
                    }
                } catch (err) {
                    throw new Error(`${file}:${err}`)
                }
            })
    }

    async listen() {
        try {
            this.app.listen(this.port, () => {
                logger.info('==========================================================================')
                logger.info('environment           : ' + ConfigService.NODE_ENV)
                logger.info(`Listening on port     : ${this.port}`)
                logger.info(`secure default check  : ${!!process.env['isSecureDefault']}`)
                logger.info(`secure env check      : ${!!process.env['isSecureEnv']}`)
                logger.info('==========================================================================')
            })
        } catch (error) {
            logger.error(`listen error: ${error.message}`)
        }
    }

    setViewEngine() {
        const hbs = expHbs.create({
            defaultLayout: 'main',
            extname: '.hbs',
            partialsDir: [path.join(__dirname, '../views/partials')],
        })
        this.app.engine('hbs', hbs.engine)
        this.app.set('view engine', 'hbs')
        this.app.set('views', path.join(__dirname, '../public/views'))
        this.app.use(Express.static(path.join(__dirname, '../public')))
        this.app.use('/static', Express.static(path.join(__dirname, '../public')))
    }

    setMongo() {
        mongoose.connect(process.env['MONGO_URL'], { useUnifiedTopology: true })
        const db = mongoose.connection
        db.once('open', () => {
            logger.info('mongo connected')
        })
    }

    setPg() {
        const host = process.env['PG_HOST']
        const port = process.env['PG_PORT']
        const db = process.env['PG_DB']
        const user = process.env['PG_USER']
        const pass = process.env['PG_PASS']

        const sequelize = new Sequelize(db, user, pass, {
            host: host,
            port: port,
            dialect: 'postgres',
            logging: logger.debug.bind(logger),
            pool: {
                max: 10,
                min: 0,
                idle: 10000,
            },
        })

        sequelize
            .authenticate()
            .then(() => {
                logger.info('pg connected')
            })
            .catch(err => {
                logger.error('postgres connect failed..' + err)
            })

        global.sequelize = sequelize
    }
}
