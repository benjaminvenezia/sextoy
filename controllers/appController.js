import UserJourney from '../models/UserJourney.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const incrementCounter = async (req, res) => {
  //   UserJourney.findOneAndUpdate(
  //     { _id: 0 },
  //     { $inc: { count_quizz_ended: 1 } },
  //     { new: false },
  //     function (err, response) {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log(response)
  //       }

  //       res.status(StatusCodes.OK).json({ status: 'incremented' })
  //     }
  //   )
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

export { incrementCounter }
