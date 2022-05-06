import express from 'express'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
import questionsRoute from './routes/questionRoutes.js'
import sextoyRoute from './routes/sextoyRoutes.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/question', questionsRoute)
app.use('/api/v1/sextoy', sextoyRoute)

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
