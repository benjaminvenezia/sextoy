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
    const jsonSextoyStimulateurs = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-stimulateurs.json', import.meta.url)
      )
    )

    const jsonSextoyClitoris = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-clitoris.json', import.meta.url)
      )
    )

    const jsonSextoyMammaire = JSON.parse(
      await readFile(
        new URL('./mock/sextoysCategories/mock-mammaire.json', import.meta.url)
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
    const questionFemmeVaginalFantaisie = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-vaginal-fantaisie.json',
          import.meta.url
        )
      )
    )
    const questionFemmeVaginalRealiste = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-vaginal-realiste.json',
          import.meta.url
        )
      )
    )
    const questionFemmeAnalManuel = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-anal-manuel.json',
          import.meta.url
        )
      )
    )
    const questionFemmeAnalRobotise = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-anal-robotise.json',
          import.meta.url
        )
      )
    )
    const questionFemmeAnal = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-anal.json',
          import.meta.url
        )
      )
    )
    const questionFemmeVaginal = JSON.parse(
      await readFile(
        new URL(
          './mock/questionsFemmes/mock-questions-femme-vaginal.json',
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
    await Sextoy.create(jsonSextoyStimulateurs)
    await Sextoy.create(jsonSextoyClitoris)
    await Sextoy.create(jsonSextoyMammaire)

    await Question.create(questionJson)
    await Question.create(questionHommePenisJson)
    await Question.create(questionHommeProstateJson)
    await Question.create(questionFemmeClitoridienJson)
    await Question.create(questionFemmeMammaireJson)
    await Question.create(questionFemmeVaginalFantaisie)
    await Question.create(questionFemmeVaginalRealiste)
    await Question.create(questionFemmeAnalManuel)
    await Question.create(questionFemmeAnalRobotise)
    await Question.create(questionFemmeAnal)
    await Question.create(questionFemmeVaginal)

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
