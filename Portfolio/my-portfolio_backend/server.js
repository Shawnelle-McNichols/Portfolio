var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var cors = require('cors');
const fs = require('fs');
const creds = require('./config');

const app = express();
const serverPort = process.env.serverPort || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

var transporter = nodemailer.createTransport({
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
router.post('/send', (req, res, next) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;
    var senderEmail = `${firstname} <${creds.EMAIL}>`;
    var myEmail = `${creds.NAME} <${creds.EMAIL}>`;
    var content = `Firstname: ${firstname}\nLastname: ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message} \n`;
    var mail = {
        from: senderEmail,
        to: creds.EMAIL,
        subject: `New Portfolio Message from ${firstname}, ${lastname}`,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        console.log(err);
        console.log(data);
        if (err) {
            res.json({
                status: 'fail',
            })
        } else {
            res.json({
                status: `success`,
            })

            transporter.sendMail(
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
                        Message Details<br>First Name: ${firstname}<br> Last Name: ${lastname}<br>Email: ${email}<br>Phone: ${phone}<br> Message: ${message}</p>`,
                },
                function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Message sent: ' + info.response);
                    }
                }
            )
        }
    })
})
app.listen(serverPort, () => console.log(`backend is running on port ${serverPort}`));