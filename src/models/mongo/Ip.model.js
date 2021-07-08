import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const logSchema = new mongoose.Schema({
    day: String,
    time: String,
    ip: String,
})

logSchema.plugin(mongoosePaginate)

export default mongoose.model('ip', logSchema, 'ip')
