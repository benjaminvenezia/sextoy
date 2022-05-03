import { readFile } from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'
import Sextoy from './models/Sextoy.js'
import Question from './models/Question.js'

const populateSextoys = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Sextoy.deleteMany()
    const jsonSextoy = JSON.parse(
      await readFile(new URL('./mock/mock-sextoys.json', import.meta.url))
    )

    await Sextoy.create(jsonSextoy)
    console.log('Table sextoy réinitialisée et remplie!')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const populateQuestions = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Question.deleteMany()
    const questionJson = JSON.parse(
      await readFile(new URL('./mock/mock-questions.json', import.meta.url))
    )

    await Question.create(questionJson)
    console.log('Table question réinitialisée et remplie!')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

//populateSextoys()
populateQuestions()
