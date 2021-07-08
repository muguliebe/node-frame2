import { Router } from 'express'
import { AsyncWrapper } from '../utils/asyncWrapper'
import Log from '../models/Log.model'

// initialize
const router = Router()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/api/log',
        router: router,
    }

    router.get('/', AsyncWrapper(getLog))
    router.post('/', AsyncWrapper(postLog))
    return thisRouter
}

export const postLog = async (req, res) => {
    const payload = req.body

    const log = new Log()
    log.top = payload.top
    log.userId = payload.userId
    log.left = payload.left
    log.target = payload.target
    log.day = req['commons'].startDate.toFormat('YYMMDD')
    log.time = req['commons'].startDate.toFormat('HH24MISS')

    log.save()
    res.json({})
}

export const getLog = async (req, res) => {
    const options = Object.assign({ sort: { day: -1, time: -1 }, limit: 10 }, req.query)
    logger.debug('options:' + options.toString())
    const result = await Log.paginate({}, options)
    res.json(result)
}
