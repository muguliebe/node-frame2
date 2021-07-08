import DateUtils from '../utils/date.utils'
import date from 'date-and-time'

/**
 * Default Func for Controller
 */
export const initBatch = () => {
    return {
        schedule: '*/1 * * * *',
        task: task,
        isUse: true,
    }
}

export const task = async () => {
    const delta = new Date().getTime() - DateUtils.getUptime().getTime()
    const after = new Date(delta)
    let afterTime = date.format(after, 'HH:mm:ss', true)

    if (delta / 86400000 >= 1) afterTime = Math.floor(delta / 86400000) + ' days ' + afterTime

    logger.info('after ' + afterTime)
}
