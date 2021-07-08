import DateUtils from '../utils/date.utils'

export default class PostUpService {
    constructor() {}

    async postUp() {
        logger.info('Check TimeZone: ' + DateUtils.checkTimeZone())
        logger.info('locale        : ' + DateUtils.locale())
        logger.info('uptime        : ' + DateUtils.uptime())
    }
}
