import { readFile } from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'
import Sextoy from './models/Sextoy.js'

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Sextoy.deleteMany()
    const jsonSextoy = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    )
    await Sextoy.create(jsonSextoy)
    console.log('Vous avez remplit la base de données!')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
