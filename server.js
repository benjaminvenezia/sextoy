import express from 'express'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = process.env.PORT || 5004

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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
