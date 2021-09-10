import axios from 'axios'
import * as instance from '../instance'

export default function itt() {
    let axi
    beforeAll(async () => {
        axi = await instance.getInstance()
    })

    it('/trs', async () => {
        const res = await axi.get('/trs')
        expect(res.status).toBe(200)
        expect(res.data.length).toBeGreaterThan(0)
    })


}
