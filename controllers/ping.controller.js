import {Router} from 'express'
import {AsyncWrapper} from '../utils/asyncWrapper';
import PingService from "../service/ping.service";

// initialize
const router = Router()
const service = new PingService()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/',
        router: router
    }

    router.get('/', AsyncWrapper(home))
    router.get('/ping', AsyncWrapper(ping))
    return thisRouter
}

export const home = async (req, res, next) => {
    res.json(await service.ping())
}

export const ping = async (req, res, next) => {
    logger.debug('here')
    const result = await service.ping()
    res.json(result)
}
