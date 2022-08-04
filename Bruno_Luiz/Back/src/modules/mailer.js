const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const { service, user, pass } = require("../config/mail.json");

const transport = nodemailer.createTransport({
  service,
  auth: {
    user,
    pass,
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".html",
      partialsDir: path.resolve("./src/resources/mail"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/resources/mail/"),
    extName: ".html",
  })
);

module.exports = transport;
