import {Router} from 'express'
import {AsyncWrapper} from '../utils/asyncWrapper'
import IpService from '../service/ip.service'
import IpModel from '../models/mongo/Ip.model'

// initialize
const serviceIp = new IpService()
const router = Router()

/**
 * Default Func for Controller
 */
export const initBatch = () => {
    router.post('/', AsyncWrapper(taskWrapper))

    return {
        schedule: '*/10 * * * *',
        task: task,
        isUse: false,
        baseUrl: '/bat/ip',
        router: router
    }
}

/*
   http 호출 받아 배치를 수행
 */
export const taskWrapper = async (req, res) => {
    const result = task()

    if (res != null)
        res.json({msg: result})
}

export const task = async () => {
    // init
    const startDate = new Date()

    // get ip
    const resIp = await serviceIp.getIp()
    logger.info('resIp:' + resIp)

    // db save
    const newIp = new IpModel()
    newIp.ip = resIp
    newIp.day = startDate.toFormat('YYMMDD')
    newIp.time = startDate.toFormat('HH24MISS')
    newIp.save()

    return resIp
}
