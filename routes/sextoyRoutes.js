import express from 'express'
const router = express.Router()

import { getSextoyByTags } from '../controllers/sextoyController.js'

router.route('/:tags').get(getSextoyByTags)

export default router
