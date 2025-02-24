import express from 'express'
import { validateBody } from '../middlewares/validateBody.js'
import { validationSchema } from '../validation/validationSchema.js'
import projectsControllers from '../controllers/controller.js'

export const portfolioRouter = express.Router()

portfolioRouter.post('/send-email', validateBody(validationSchema), projectsControllers.controller)
portfolioRouter.get('/projects', projectsControllers.getAllProjectsController)
