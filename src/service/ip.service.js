import axios from 'axios'

export default class IpService {
    constructor() {}

    async getIp() {
        const ip = await axios.get('http://ifconfig.me')
        return ip.data
    }
}
