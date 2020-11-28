import { Router } from 'express'
import { AsyncWrapper } from '../utils/asyncWrapper'
import Event from '../models/Event.model'

// initialize
const router = Router()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/api/mock/events',
        router: router,
    }

    router.get('/', AsyncWrapper(getLog))
    return thisRouter
}

export const getLog = async (req, res) => {
    const options = Object.assign(
        { sort: { id: -1, time: -1 }, limit: 10 },
        req.query
    )
    const result = await Event.paginate({}, options)
    res.json(result)
}
