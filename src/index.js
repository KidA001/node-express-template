import express from 'express'
import redis from 'redis'

const app = express()
const port = 3000

const redisClient = redis.createClient()

redisClient.on('connect', () => {
  console.log('Redis client connected')
  app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
})

redisClient.on('error', (err) => {
  console.log(`Redis client error ${err}`)
})

app.get('/', (req, res) => res.send('Hello World!'))
