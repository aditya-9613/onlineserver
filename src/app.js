import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'https://super-duper-space-waffle-x55gr6jjw544hvqg5-3000.app.github.dev/'],
    credentials: true
}))

app.use(express.json({limit: "1mb"}))
app.use(express.urlencoded({extended: true, limit: "1mb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from './routes/user.routes.js'


app.use('/api/v1/user', userRouter)


export {app}