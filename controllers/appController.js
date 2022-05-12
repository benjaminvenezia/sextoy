import UserJourney from '../models/UserJourney.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const incrementCounter = async (req, res) => {
  UserJourney.findByIdAndUpdate(
    { _id: '627d03c52df59a2f01aefb11' },
    { $inc: { count_quizz_ended: 1 } }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({ error: err })
    } else {
      res.json(result)
    }
  })
}

const getCounter = async (req, res) => {
  const { count_quizz_ended } = await UserJourney.findById(
    '627d03c52df59a2f01aefb11'
  ).exec()

  return res.status(200).json(count_quizz_ended)
}

export { incrementCounter, getCounter }
