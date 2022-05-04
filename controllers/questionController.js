import Question from '../models/Question.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const getQuestionByTags = async (req, res) => {
  const questions = await Question.find({
    tags_question: null,
  })
  // PersonModel.find({ favoriteFood : { $all : ["sushi", "bananas"] }, ...})

  res.status(StatusCodes.OK).json({ questions })
}

export { getQuestionByTags }
