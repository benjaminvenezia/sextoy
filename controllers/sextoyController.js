import Sextoy from '../models/Sextoy.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const getSextoyByTags = async (req, res) => {
  const { tags } = req.query
  console.log('req query: ', tags)

  const sextoys = await Sextoy.find({
    tags_match: { $all: tags },
  })

  res.status(StatusCodes.OK).json({ sextoys, count: sextoys.length })
}

export { getSextoyByTags }
