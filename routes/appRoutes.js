import express from 'express'
const router = express.Router()
import apiLimiter from '../utils/apiLimiter.js'

import { incrementCounter, getCounter } from '../controllers/appController.js'

router.route('/').patch(apiLimiter, incrementCounter)
router.route('/').get(apiLimiter, getCounter)

export default router
