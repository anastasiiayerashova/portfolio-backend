import { isHttpError } from 'http-errors'

export const errorHandlerMiddleware = async (e, req, res, next) => {
    if (isHttpError(e)) {

        return res.status(e.status).json({ status: e.status, message: e.name, data: e })

    }

    res.status(500).json({ status: 500, message: 'Something went wrong', error: e.message })
}
