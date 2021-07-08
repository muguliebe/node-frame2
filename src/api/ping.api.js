import { Router } from 'express'
import { AsyncWrapper } from '../utils/asyncWrapper'
import PingService from '../service/ping.service'

// initialize
const router = Router()
const service = new PingService()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/ping',
        router: router,
    }

    router.get('/', AsyncWrapper(ping))
    router.get('/ip', AsyncWrapper(ip))
    return thisRouter
}

export const ping = async (req, res) => {
    logger.debug(`gid: ${req['commons'].gid}`)
    const result = await service.ping()
    res.json(result)
}

export const ip = async (req, res) => {
    const result = await service.getIp()
    res.json(result)
}
