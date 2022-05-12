import express from 'express'
const router = express.Router()
import apiLimiter from '../utils/apiLimiter.js'

import { incrementCounter } from '../controllers/appController.js'

router.route('/increment').patch(apiLimiter, incrementCounter)

export default router
