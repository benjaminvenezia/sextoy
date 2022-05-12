import mongoose from 'mongoose'
import { stringify } from 'querystring'

const UserJourney = new mongoose.Schema({
  count_quizz_ended: {
    type: Number,
  },
})

export default mongoose.model('userJourney', UserJourney)
