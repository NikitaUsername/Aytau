const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false }
});
const from = process.env.MAIL_USER;


module.exports.sendMail = async (to, theme, text, files = []) => {
    console.log(to)
    console.log(theme)
    if (to && theme && text) {
        await transporter.sendMail({
            from: from,
            to: to,
            subject: theme,
            // text: text,
            html:text,
            attachments: files
        }, (error, info) => {
            if (error)
                return false;
        });

        return true;
    } else {
        return false;
    }
}