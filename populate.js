import { readFile } from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'
import Sextoy from './models/Sextoy.js'
import Question from './models/Question.js'

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Sextoy.deleteMany()
    await Question.deleteMany()

    const jsonSextoy = JSON.parse(
      await readFile(new URL('./mock/mock-sextoys.json', import.meta.url))
    )

    const questionJson = JSON.parse(
      await readFile(new URL('./mock/mock-questions.json', import.meta.url))
    )

    const questionHommePenisJson = JSON.parse(
      await readFile(
        new URL('./mock/mock-questions-homme-penis.json', import.meta.url)
      )
    )

    const questionHommeProstateJson = JSON.parse(
      await readFile(
        new URL('./mock/mock-questions-homme-prostate.json', import.meta.url)
      )
    )

    await Sextoy.create(jsonSextoy)
    await Question.create(questionJson)
    await Question.create(questionHommePenisJson)
    await Question.create(questionHommeProstateJson)

    console.log('Table sextoy réinitialisée et remplie!')
    console.log('Table question réinitialisée et remplie!')

    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

//populateSextoys()
start()
