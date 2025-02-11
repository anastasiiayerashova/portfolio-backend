import express from 'express'
import cors from 'cors'
import pino from 'pino-http'
import { getEnvVar } from './utils/getEnvVar.js'
import { portfolioRouter } from './router/portfolioRouter.js'
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js'
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js'

const PORT = Number(getEnvVar('PORT', 3000))

export const startServer = () => {

    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(pino({
        transport: {
            target: 'pino-pretty'
        }
    }))

    app.use(portfolioRouter)

    app.use(notFoundMiddleware)
    app.use(errorHandlerMiddleware)

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}
