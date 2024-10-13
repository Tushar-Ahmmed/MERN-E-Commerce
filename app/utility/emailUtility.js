

import nodemailer from "nodemailer"
import { EMAIL_HOST, EMAIL_PASS, EMAIL_port, EMAIL_SECURITY, EMAIL_UN_AUTH, EMAIL_USER } from "../config/config.js"

export const sendEmail = async (emailTo, emailSub, emailText)=>{
    const transporter = nodemailer.createTransport(
        {
            host:EMAIL_HOST,
            port:EMAIL_port,
            secure:EMAIL_SECURITY,
            auth:{
                user:EMAIL_USER,
                pass:EMAIL_PASS
            },
            tls:{
                rejectUnauthorized:EMAIL_UN_AUTH
            }
        }
    )

    let mailOption = {
        from: 'Mern E-Commerse <info@teamrabbil.com>',
        to: emailTo,
        subject:emailSub,
        text: emailText
    }

    return transporter.sendMail(mailOption)
}