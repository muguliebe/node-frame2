import { Router } from 'express'
import { AsyncWrapper } from '../utils/asyncWrapper'
import Transaction from '../models/mongo/Transaction.model'

// initialize
const router = Router()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/api/trs',
        router: router,
    }

    router.get('/', AsyncWrapper(getTrs))
    return thisRouter
}

export const getTrs = async (req, res) => {
    logger.debug('test getTrs')
    const options = Object.assign({ sort: { day: -1 }, limit: 10 }, req.query)
    const result = await Transaction.paginate({}, options)
    res.json(result)
}
