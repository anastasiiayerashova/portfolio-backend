import { sendEmailService } from "../services/service.js"

export const controller = async (req, res, next) => {
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
