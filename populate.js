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

    const jsonSextoyPlugs = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-plugs.json', import.meta.url)
      )
    )
    const jsonSextoyVaginettes = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-vaginettes.json', import.meta.url)
      )
    )
    const jsonSextoyChapelets = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-chapelets.json', import.meta.url)
      )
    )
    const jsonSextoyFuckmachines = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-fuckmachines.json', import.meta.url)
      )
    )
    const jsonSextoyGodes = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-godes.json', import.meta.url)
      )
    )
    const jsonSextoyMasturbateurs = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-masturbateurs.json', import.meta.url)
      )
    )
    const jsonSextoyPoupees = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-poupees.json', import.meta.url)
      )
    )

    const questionJson = JSON.parse(
      await readFile(
        new URL('./mock/questionsIntroduction/mock-questions.json', import.meta.url)
      )
    )
    const questionHommePenisJson = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsHommes/mock-questions-homme-penis.json',
          import.meta.url
        )
      )
    )

    const questionHommeProstateJson = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsHommes/mock-questions-homme-prostate.json',
          import.meta.url
        )
      )
    )

    const questionFemmeClitoridienJson = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-clitoridien.json',
          import.meta.url
        )
      )
    )
    const questionFemmeMammaireJson = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-mammaire.json',
          import.meta.url
        )
      )
    )

    await Sextoy.create(jsonSextoyPlugs)
    await Sextoy.create(jsonSextoyVaginettes)
    await Sextoy.create(jsonSextoyChapelets)
    await Sextoy.create(jsonSextoyFuckmachines)
    await Sextoy.create(jsonSextoyGodes)
    await Sextoy.create(jsonSextoyMasturbateurs)
    await Sextoy.create(jsonSextoyPoupees)

    await Question.create(questionJson)
    await Question.create(questionHommePenisJson)
    await Question.create(questionHommeProstateJson)
    await Question.create(questionFemmeClitoridienJson)
    await Question.create(questionFemmeMammaireJson)

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
