const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const creds = require('./config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
})
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
})
app.post('/api/send', async (req, res) => {
    const { firstname, lastname, email, phone, message } = req.body
    const senderEmail = `${firstname} <${creds.EMAIL}>`;
    const myEmail = `${creds.NAME} <${creds.EMAIL}>`;
    const content = `Firstname: ${firstname}\nLastname: ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message} \n`;
    const mail = {
        from: senderEmail,
        to: creds.EMAIL,
        subject: `New Portfolio Message from ${firstname}, ${lastname}`,
        text: content
    }
    try {
        await transporter.sendMail(mail);
        await transporter.sendMail(
            {
                from: myEmail,
                to: email,
                subject: 'Thank You for Reaching Out To Me!',
                text: `Hey ${firstname},\n\nThank you for contacting me! I appreciate you taking the time to reach out to me and I will review your message asap.\n\n
                        However, if your inquiry is urgent, feel free to mention that in your email and I will do my best to respond promptly.\n\n
                        Feel free to take a look at my portfolio and resume to learn more about my experience and skills. I look forward to connecting with you and discussing how we can collaborate in the future.\n\n
                        Kind Regards,\n${creds.NAME}\n
                        Full Stack Developer\n\n\n
                        Message Details\nFirst Name: ${firstname}\n Last Name: ${lastname}\nEmail: ${email}\n Phone: ${phone}\nMessage: ${message}`,
                html: `<p>Hey ${firstname},<br><br>Thank You for Reaching Out To Me! I appreciate you taking the time to reach out to me and I will review your message asap.<br><br>
                        However, if your inquiry is urgent, feel free to mention that in your email and I will do my best to respond promptly.<br><br>
                        Feel free to take a look at my portfolio and resume to learn more about my experience and skills. I look forward to connecting with you and discussing how we can collaborate in the future.<br><br>              
                        Kind Regards,<br>${creds.NAME}<br>
                        Full Stack Developer <br><br><br>
                        Message Details<br>First Name: ${firstname}<br> Last Name: ${lastname}<br>Email: ${email}<br>Phone: ${phone}<br> Message: ${message}</p>`
            });
        res.json({ status: 'success' });
    } catch (err) {
        console.log(err);
        res.json({ status: 'fail' });
    }

});
module.exports = app;