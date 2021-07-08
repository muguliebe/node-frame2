import { Router } from 'express'
import { AsyncWrapper } from '../utils/asyncWrapper'
import UserService from '../service/user.service'

//==============================================================================
// initialize
const router = Router()
const service = new UserService()

//==============================================================================
// Default Func for Controller
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/users',
        router: router,
    }

    router.get('/', AsyncWrapper(getUsers))
    router.get('/:id', AsyncWrapper(getUser))
    return thisRouter
}

//==============================================================================
export const getUsers = async (req, res) => {
    const result = await service.getUsers()
    res.json(result)
}

export const getUser = async (req, res) => {
    const result = await service.getUser(req.params.id)
    res.json(result)
}
