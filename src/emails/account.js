const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arlindo.hayashi@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arlindo.hayashi@gmail.com',
        subject: 'Sad to see you go =(',
        text: `We are very sad to know you are leaving us ${name}. 
    If possible, tell us what made you make this decision. 
    And of course, if you return in the future, you will be more than welcome!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}