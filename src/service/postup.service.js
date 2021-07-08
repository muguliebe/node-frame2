import DateUtils from '../utils/date.utils'

export default class PostUpService {
    constructor() {}

    async postUp() {
        logger.info('Check TimeZone: ' + DateUtils.checkTimeZone())
    }
}
