import env from "@/constants/environment"
import router from "@/routes"
import compression from "compression"
import cookieParser from "cookie-parser"
import cors from "cors"
import express, { Request, Response } from "express"
import http from "http"

const app = express()
const server = http.createServer()

app.use(cors({
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())
app.use(compression())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello World!"
    })
})

app.use('/', router)

server.listen(env.port, () => {
    console.log(`Server is listening to port ${env.port}`)
})