import mongoose from 'mongoose'

const SextoySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Merci de préciser le nom du sextoy'],
  },
  description: {
    type: String,
    required: [true, 'Merci de donner une description au sextoy'],
  },
  gender: {
    type: String,
    enum: ['homme', 'femme'],
    default: 'femme',
  },
})

export default mongoose.model('Sextoy', SextoySchema)
