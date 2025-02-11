import express from 'express'
import { validateBody } from '../middlewares/validateBody.js'
import { validationSchema } from '../validation/validationSchema.js'
import { controller } from '../controllers/controller.js'

export const portfolioRouter = express.Router()

portfolioRouter.post('/backend', validateBody(validationSchema), controller)
