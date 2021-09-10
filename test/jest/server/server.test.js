import app from '../../../src/server'
import axios from 'axios'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import * as instance from '../instance'
import EventEmitter from 'events'
import sleep from 'sleep-promise'
import transactionIt from './transaction.api.unit'
import logIt from './log.api.unit'
import ipBatIt from './ip.batch.unit'


describe('server test', () => {
    let axi
    beforeAll(async () => {
        let bReady = false
        app.emitterPost.on('post', () => {
            bReady = true
        })
        while (!bReady) {
            await sleep(500)
        }
        axi = await instance.getInstance()
    })
    afterAll(async () => {
        await sleep(5000)
        await app.close()
    })
    it('server home should be return 200', async () => {
        const res = await axi.get('/ping')
        expect(res.status).toBe(200)
    })
    it('ping must return pong', async () => {
        const res = await axi.get('/ping')
        expect(res.data).toHaveProperty('msg', 'pong')
    })

    transactionIt()
    logIt()
    ipBatIt()

    it('the end', async(done) => {
        done()
    })
})

