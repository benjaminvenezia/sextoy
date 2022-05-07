import mongoose from 'mongoose'

const SextoySchema = new mongoose.Schema({
  category: {
    type: String,
    enum: [
      'plug',
      'masturbateur',
      'vaginette',
      'gode',
      'poupee',
      'chapelet',
      'fuckmachine',
    ],
    required: [true, 'Merci de préciser le nom du sextoy'],
  },
  name: {
    type: String,
    required: [true, 'Merci de préciser le nom du sextoy'],
  },
  description: {
    type: String,
    required: [true, 'Merci de donner une description au sextoy'],
  },
  tags_match: {
    type: [String],
  },
  articles: [
    {
      name_shop: {
        type: String,
        required: [true, 'Merci de préciser le label de la réponse'],
      },
      url_category: {
        type: String,
      },
      url_product: {
        type: String,
      },
    },
  ],
})

export default mongoose.model('Sextoy', SextoySchema)
