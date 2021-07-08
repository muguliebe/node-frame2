import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema

const eventSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    category: String,
    title: String,
    description: String,
    location: String,
    date: String,
    time: String,
    petsAllowed: String,
    organizer: String,
})

eventSchema.plugin(mongoosePaginate)

export default mongoose.model('event', eventSchema, 'event')
