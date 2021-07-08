import IpService from '../service/ip.service'
import IpModel from '../models/mongo/Ip.model'

// initialize
const serviceIp = new IpService()

/**
 * Default Func for Controller
 */
export const initBatch = () => {
    return {
        schedule: '*/10 * * * *',
        task: task,
        isUse: false,
    }
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
}
