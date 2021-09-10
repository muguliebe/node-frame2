import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

export const getInstance = async () => {
    const forDot = await fs.readFileSync(path.resolve(`src/config/config.${process.env['NODE_ENV']}.env`))
    const env = await dotenv.parse(forDot)

    return axios.create({
        baseURL: `http://localhost:${env['PORT']}`,
        timeout: 5000
    })
}
