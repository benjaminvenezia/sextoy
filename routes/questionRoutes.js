import express from 'express'
const router = express.Router()
import apiLimiter from '../utils/apiLimiter.js'

import {
  getQuestionByTags,
  getFirstQuestion,
} from '../controllers/questionController.js'

router.route('/').get(apiLimiter, getFirstQuestion)
router.route('/:tags?').get(apiLimiter, getQuestionByTags)

export default router
