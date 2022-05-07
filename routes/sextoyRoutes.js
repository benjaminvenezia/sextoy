import express from 'express'
const router = express.Router()
import apiLimiter from '../utils/apiLimiter.js'

import { getSextoyByTags } from '../controllers/sextoyController.js'

router.route('/:tags').get(apiLimiter, getSextoyByTags)

export default router
