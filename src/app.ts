import "reflect-metadata"
import express from "express"
import "express-async-errors" 
import handleError from "./errors/handleError"
import messageRoutes from "./routes/message.routes"

const app = express()

// Middleware para permitir CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    next()
  })

app.use(express.json())
app.use('', messageRoutes)

app.use(handleError)

export default app
