import date from 'date-and-time'

export default class DateUtils {
    static #uptime = new Date()

    static checkTimeZone = () => {
        return date.format(new Date(), 'YYYY-MM-DD HH:mm:ss ddd, MMMM [GMT]Z')
    }
    static currentDate = () => date.format(new Date(), 'YYYYMMDD')
    static currentTime = () => date.format(new Date(), 'HHmmss')
    static currentFullTime = () => date.format(new Date(), 'YYYYMMDD HH:mm:ss')
    static format = format => date.format(new Date(), format)
    static now = () => new Date()
    static locale = () => date.locale()
    static uptime = () => date.format(this.#uptime, 'YYYY-MM-DD HH:mm:ss')
    static getUptime = () => this.#uptime
}
