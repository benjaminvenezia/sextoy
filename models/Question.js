import mongoose from 'mongoose'
import { stringify } from 'querystring'

const QuestionSchema = new mongoose.Schema({
  label_question: {
    type: String,
    required: [true, 'Merci de préciser le label question'],
  },
  responses: [
    {
      label_answer: {
        type: String,
        required: [true, 'Merci de préciser le label de la réponse'],
      },
      tags: {
        type: [String],
        required: [true, 'Merci de préciser les tags lié à cette réponse'],
      },
    },
  ],
  level: {
    type: Number,
  },
  tags_question: {
    type: [String],
  },
})

export default mongoose.model('Question', QuestionSchema)
