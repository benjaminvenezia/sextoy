import Question from '../models/Question.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const getQuestionByTags = async (req, res) => {
  const { tags } = req.query
  console.log('req query: ', tags)

  const questions = await Question.find({
    tags_match: { $all: tags },
  })

  res.status(StatusCodes.OK).json({ questions })
}

export { getQuestionByTags }
