import nodemailer from 'nodemailer'
import { getEnvVar } from './getEnvVar.js'
import { SMTP } from '../constants/index.js'

const transport = nodemailer.createTransport({
    host: getEnvVar(SMTP.SMTP_HOST),
    port: Number(getEnvVar(SMTP.SMTP_PORT)),
    secure: true,
    auth: {
        user: getEnvVar(SMTP.SMTP_USER),
        pass: getEnvVar(SMTP.SMTP_PASSWORD)
    }
})

export const sendEmail = async (options) => {
    try {
        await transport.sendMail(options)
    }
    catch (e) {
        throw e.message
    }
}
