import Question from '../models/Question.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const getQuestionByTags = async (req, res) => {
  const { tags } = req.query
  let tagsArray = []

  tagsArray = tags.split(', ')

  const questions = await Question.find({
    tags_match: { $size: tagsArray.length, $all: tagsArray },
  })

  res.status(StatusCodes.OK).json({ questions })
}

const getFirstQuestion = async (req, res) => {
  const questions = await Question.find({ level: 1 })

  res.status(StatusCodes.OK).json({ questions })
}

export { getQuestionByTags, getFirstQuestion }
