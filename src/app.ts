import "reflect-metadata"
import express from "express"
import "express-async-errors" 
import handleError from "./errors/handleError"
import messageRoutes from "./routes/message.routes"



const app = express()
app.use(express.json())
app.use('', messageRoutes)

app.use(handleError)

export default app