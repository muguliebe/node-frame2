import axios from 'axios'

export default class PingService {
    #msg = 'pong'

    constructor() {}

    async ping() {
        return { msg: this.#msg }
    }

    async getIp() {
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                },
            }
            const res = await axios.get('https://ifconfig.me', axiosConfig)
            logger.info('ip is:' + res.data)

            return res.data
        } catch (e) {
            logger.error('request ifconfig.me err:', e)
        }
    }
}
