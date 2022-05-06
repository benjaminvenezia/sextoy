import express from 'express'
const router = express.Router()

import {
  getQuestionByTags,
  getFirstQuestion,
} from '../controllers/questionController.js'

router.route('/').get(getFirstQuestion)
router.route('/:tags?').get(getQuestionByTags)

export default router
