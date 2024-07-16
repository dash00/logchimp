const nodemailer = require("nodemailer");
require("dotenv").config();

// utils
const logchimpConfig = require("../../utils/logchimpConfig");
const config = logchimpConfig();
const logger = require("../../utils/logger");

if (config.mail) {
  const mail = nodemailer.createTransport({
    host: config.mail.host,
    port: config.mail.port,
    secure: true,
    // secureConnection: false,
    // tls: {
    //    ciphers: "SSLv3",
    // },
    // ignoreTLS: process.env.NODE_ENV === "development",
    // requireTLS: true,
    connectionTimeout: 10000,
    auth: {
      user: config.mail.user,
      pass: config.mail.password,
    },
  });

  module.exports = mail;
} else {
  logger.warn("Email adapter missing");
  module.exports = null;
}
