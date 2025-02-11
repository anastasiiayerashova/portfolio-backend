import { sendEmail } from "../utils/sendEmail.js"
import Handlebars from "handlebars"
import path from 'node:path'
import fs from 'node:fs'
import createHttpError from "http-errors"
import { getEnvVar } from "../utils/getEnvVar.js"
import { SMTP } from "../constants/index.js"

const templateSource = fs.readFileSync(path.join('src', 'templates', 'emailTemplate.html'), 'utf-8')

export const sendEmailService = async ({ email, message }) => {

    const template = Handlebars.compile(templateSource.toString())

    const html = template({
        email: email,
        message: message
    })

    try {
        await sendEmail({
            from: email,
            to: 'yerashova.a@gmail.com',
            subject: 'New message from Portfolio website',
            html
        })
    }
    catch (e) {
        throw createHttpError(500, e.message)
    }
}
