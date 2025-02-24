import { controllerWrapper } from "../decorators/controllerWrapper.js"
import { getAllProjects, sendEmailService } from "../services/service.js"

const controller = async (req, res, next) => {
    const { email, message } = req.body

    await sendEmailService(req.body)

    res.status(200).json({
        status: 200,
        message: 'Successfully received request body and sent email',
        data: {
            email,
            message
        }
    })
}

const getAllProjectsController = async (req, res) => {
    const projects = await getAllProjects()

    res.json({
        status: 200,
        message: 'Successfully received list of all projects',
        data: projects
    })
}

export default {
    controller: controllerWrapper(controller),
    getAllProjectsController: controllerWrapper(getAllProjectsController)
}
