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
  length: {
    type: Number,
    required: false,
  },
  width: {
    type: Number,
    required: false,
  },
  material: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ['homme', 'femme'],
    default: 'femme',
  },
  url: {
    type: String,
    required: [true, 'Merci de préciser une url de redirection vers le produit'],
  },
})

export default mongoose.model('Sextoy', SextoySchema)
