import Sextoy from '../models/Sextoy.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const getSextoyByTags = async (req, res) => {
  const { tags } = req.query

  const tagsArray = tags.split(', ')

  const sextoys = await Sextoy.find({
    tags_match: { $all: tagsArray },
  })

  res.status(StatusCodes.OK).json({ sextoys, count: sextoys.length })
}

export { getSextoyByTags }
