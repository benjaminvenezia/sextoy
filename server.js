import express from 'express'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import morgan from 'morgan'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import cors from 'cors'

import connectDB from './db/connect.js'

import questionsRoute from './routes/questionRoutes.js'
import sextoyRoute from './routes/sextoyRoutes.js'
import appRoutes from './routes/appRoutes.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/build')))

app.use(express.json())
app.use(cors())

app.use('/api/v1/question', questionsRoute)
app.use('/api/v1/sextoy', sextoyRoute)
app.use('/api/v1/', appRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

const port = process.env.PORT || 5004

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
