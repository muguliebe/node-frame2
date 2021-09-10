import * as instance from '../instance'
import * as IpBatch from '../../../src/batch/ip.batch'

export default function itt() {
    let axi
    beforeAll(async () => {
        axi = await instance.getInstance()
    })

    it('ip batch by http, must be return IP', async () => {
        const res = await axi.post('/bat/ip')
        expect(res.status).toBe(200)
        expect(res.data).not.toBeNull()
    })

    it('ip batch task run without exception', async () => {
        const resIp = await IpBatch.task()
        console.log(resIp)
    })



}
