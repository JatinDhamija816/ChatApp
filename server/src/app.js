import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.Routes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '16kb' }))

app.use('/api/user', userRoutes)

export default app