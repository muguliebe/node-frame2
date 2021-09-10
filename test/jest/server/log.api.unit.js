import * as instance from '../instance'

export default function itt() {
    let axi
    beforeAll(async () => {
        axi = await instance.getInstance()
    })
    it('/api/log', async () => {
        const res = await axi.get('/api/log?page=1')
        expect(res.status).toBe(200)
        expect(res.data).not.toBeNull()
    })


}
