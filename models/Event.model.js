import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const eventSchema = new mongoose.Schema({
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
