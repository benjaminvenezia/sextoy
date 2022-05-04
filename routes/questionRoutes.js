import express from 'express'
const router = express.Router()

import { getQuestionByTags } from '../controllers/questionController.js'

router.route('/:tags?').get(getQuestionByTags)
// router.route('/').post(createJob).get(getAllJobs)
// router.route('/stats').get(showStats)
// router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
