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
      },
      disabled: {
        type: Boolean,
      },
    },
  ],
  level: {
    type: Number,
  },
  tags_match: {
    type: [String],
  },
})

export default mongoose.model('Question', QuestionSchema)
