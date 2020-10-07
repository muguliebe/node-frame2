import {Router} from 'express'
import {AsyncWrapper} from '../utils/asyncWrapper';
import axios from 'axios'

// initialize
const router = Router()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/users',
        router: router
    }

    router.get('/', AsyncWrapper(getUsers))
    router.get('/t', AsyncWrapper(testUsers))
    return thisRouter
}

export const getUsers = async (req, res, next) => {
    logger.debug('test getUsers')
    const result = await axios.get('https://api.github.com/users').data
    console.dir(result)
    res.json(result)
}

export const testUsers = async (req, res, next) => {
    logger.debug('test getUsers')
    res.json({
        msg: 'test job'
    })
}
