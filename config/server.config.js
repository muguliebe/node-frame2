import Express from 'express'
import helmet from 'helmet'
import path from 'path'
import ConfigService from '../service/config.service';
import readReadSync from 'recursive-readdir-sync'
import chalk from 'chalk'
import hbs from 'express-handlebars'

export default class ServerConfig {

    constructor({port, middlewares, controllerPath, apiPath}) {

        this.app = Express()
        this.app.set('env', ConfigService.NODE_ENV)
        this.app.set('port', port)

        this.app.use(helmet())
        this.registerLogMiddleware()
        this.setViewEngine()

        try {
            this.bindController(controllerPath)
            this.bindController(apiPath)
        } catch (err) {
            throw new Error(`controller bind error occurred: ${err}`)
        }

    }

    get port() {
        return this.app.get('port')
    }

    set port(number) {
        this.app.set('port', number)
    }

    registerMiddleware(middleware) {
        this.app.use(middleware);
        return this;
    }

    getActualRequestDurationInMilliseconds = start => {
        const NS_PER_SEC = 1e9 // convert to nanoseconds
        const NS_TO_MS = 1e6 // convert to milliseconds
        const diff = process.hrtime(start)
        return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
    }
    app;

    logAdvice = (req, res, next) => {
        let method = req.method
        let url = req.url
        let status = res.statusCode
        const start = process.hrtime()

        next()

        const durationInMilliseconds = this.getActualRequestDurationInMilliseconds(start)

        let statusColor = chalk.green(status)
        if (status !== 200) statusColor = chalk.red(status)

        let log = `${method} ${chalk.yellow(url)} ${statusColor} ${durationInMilliseconds.toLocaleString()} ms`
        logger.info(log)
    };

    registerLogMiddleware() {
        return this.registerMiddleware(this.logAdvice)
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

    async listen() {
        try {
            this.app.listen(this.port, () => {
                logger.info('================================================================================')
                logger.info('environment       : ' + ConfigService.NODE_ENV)
                logger.info(`Listening on port : ${this.port}`)
                logger.info('================================================================================')
            })
        } catch (error) {
            logger.error(`listen error: ${error.message}`)
        }
    }

    setViewEngine() {
        this.app.engine('hbs', hbs({
            defaultLayout: 'main',
            extname: '.hbs'
        }))

        this.app.set('view engine', 'hbs')
    }

}
