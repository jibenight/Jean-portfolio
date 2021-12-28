if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;

// enable static files pointing to the folder "public"
// this can be used to serve the index.html file
app.use(express.static(path.join(__dirname, '/')));

//render index.html page
app.get('/', (request, response) => {
  response.render(index.html);
});

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // this is to handle URL encoded data
// end parser middleware

// custom middleware to log data access
const log = function (request, response, next) {
  console.log(
    `${new Date()}: ${request.protocol}://${request.get('host')}${
      request.originalUrl
    }`
  );
  console.log(request.body); // make sure JSON middleware is loaded first
  next();
};
app.use(log);
// end custom middleware

// HTTP POST
app.post('/', function (request, response) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'mail.jean-nguyen.dev',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER, // this should be YOUR GMAIL account
      pass: process.env.PASSWORD, // this should be your password
    },
  });

  let textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
  let htmlBody = `<h2>Email du formulaire jean-nguyen.dev</h2><p>Nom: ${request.body.name}</p><p>Objet: ${request.body.subject}</p><p>Email: <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>Message:<br><br> ${request.body.message}</p>`;
  let mail = {
    from: 'contact@jean-nguyen.dev', // sender address
    to: 'nguyen.jean@me.com', // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
    subject: 'Message du formulaire: jean-nguyen.dev', // Subject line
    text: textBody,
    html: htmlBody,
  };

  // send mail
  transporter.sendMail(mail, function (err, info) {
    if (err) {
      console.log(err);
      response.json({
        message:
          "message not sent: an error occured; check the server's console log",
      });
    } else {
      response.status(204).send();
    }
  });
});

if (typeof PhusionPassenger !== 'undefined') {
  app.listen('passenger');
} else {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
