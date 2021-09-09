import DateUtils from '../../../src/utils/date.utils'

describe('Date Utils', () => {
    it('every method not be null', () => {
        expect(DateUtils.now()).not.toBeNull()
        expect(DateUtils.checkTimeZone()).not.toBeNull()
        expect(DateUtils.currentDate()).not.toBeNull()
        expect(DateUtils.currentTime()).not.toBeNull()
        expect(DateUtils.currentFullTime()).not.toBeNull()
        expect(DateUtils.locale()).not.toBeNull()
        expect(DateUtils.uptime()).not.toBeNull()
        expect(DateUtils.getUptime()).not.toBeNull()
        expect(DateUtils.format('YYYYMMDD')).not.toBeNull()
    })
})
