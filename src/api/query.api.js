import {Router} from 'express'
import {AsyncWrapper} from '../utils/asyncWrapper'
import dual from '../models/query/dual.query'
import {Sequelize, QueryTypes} from 'sequelize'

// initialize
const router = Router()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/api/query',
        router: router,
    }

    router.get('/', AsyncWrapper(queryTest))
    return thisRouter
}

export const queryTest = async (req, res) => {
    const query = await sequelize.query(dual.selectDual, {
            type: QueryTypes.SELECT,
            replacements: {one: 1}
        }
    )
    const result = query[0]
    logger.debug('first:' + result.first)
    logger.debug('second:' + result.first)
    logger.debug('test end')

    res.json(result)
}

