import request from 'supertest'
import app from '../../../src/server'
import axios from 'axios'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

describe('server test', () => {
    let instance
    beforeAll(() => {

        const env = dotenv.parse(fs.readFileSync(path.resolve('src/config/config.default.env'), {encoding:'utf-8'}))
        console.log(env)
        instance = axios.create({
            baseURL: `http://localhost:${env['PORT']}`,
            timeout: 1000
        })
    })
    it('server home should be return 200', async () => {
        console.log(instance.url)
        const res = await instance.get('/ping')
        expect(res.status).toBe(200)
    })
    it('ping must return pong', async () => {
        const res = await instance.get('/ping')
        expect(res.data).toHaveProperty('msg', 'pong')
    })

})

