import express from 'express'
const router = express.Router()

import { getQuestionByTags } from '../controllers/questionController.js'

router.route('/:tags?').get(getQuestionByTags)

export default router
