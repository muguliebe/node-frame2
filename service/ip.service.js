import axios from 'axios'

export default class IpService {
    constructor() {}

    async getIp() {
        const ip = await axios.get('https://ifconfig.me')
        return ip.data
    }
}
