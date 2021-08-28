const fs = require('fs')
const dotenv = require('dotenv')
const {exec} = require('child_process')

const envConfig = dotenv.parse(fs.readFileSync('src/config/secure/config.dev.env'))

const exe = `cd src/models && sequelize-auto -o "./pg" -d ${envConfig.PG_DB} -e postgres -h ${envConfig.PG_HOST} -p ${envConfig.PG_PORT} -u ${envConfig.PG_USER} -x ${envConfig.PG_PASS}`
const dir = exec(exe, (err, stdout, stderr) => {
    if (err) {
        console.error('ERROR!!', stderr)
    }
    console.log(stdout)
})

dir.on('exit', function (code) {
    console.log(code)
})
