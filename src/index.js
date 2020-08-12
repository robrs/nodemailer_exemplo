const express = require('express');
const nodemailer = require('nodemailer')
const app = express();

const user = "teste@teste.com";
const pass = "4hgs&@$$";

app.get('/', (req, res) => res.send('Hello Word!!'));

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.seuservidorsmtp.com",
        port: "465",
        auth: { user, pass }
    })

    transporter.sendMail({
        from: 'noreply@teste.com',
        to: 'destinatario@teste.com',
        replyTo: user,
        subject: "Teste NodeJS",
        text: "Olá, isso é um teste!"
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })
});

app.listen('3333', () => console.log(`Running on port 3333`));