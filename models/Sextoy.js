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
    type: String,
    enum: ['sm', 'md', 'lg', 'xl'],
    required: [true, 'Merci de donner une taille au produit.'],
  },
  width: {
    type: String,
    enum: ['sm', 'md', 'lg', 'xl'],
    required: [true, 'Merci de donner une largeur au produit.'],
  },
  tags: {
    type: [String],
  },
})

export default mongoose.model('Sextoy', SextoySchema)
