const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = express.Router();
require('dotenv').config();


const nodemailer = require("nodemailer");
const cors = require('cors')

const PORT = process.env.PORT || 3001;
const app = express();

// const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/', router);

const contactEmail = nodemailer.createTransport({
  service: "gmail", auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PW
  }
});

contactEmail.verify((error) => {
  if(error) {
    console.log(error);
  } else{
    console.log("Email successfully verified.")
  }
})

router.post('/Contact', (req, res) => {
  console.log(req.body)
  first_name = req.body.first_name,
  last_name = req.body.last_name,
  user_email = req.body.user_email,
  phone_number = req.body.phone_number
  message = req.body.message

  const mail = {
    from: `${first_name} ${last_name}`,
    to: process.env.EMAIL,
    subject: "Contact Form Submission",
    html: `<p> Name: ${first_name} ${last_name}<p>
            <p> Email: ${user_email}<p>
            <p> Phone Number: ${phone_number}<p>
            <p> Message: ${message}<p>` 
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR"});
    } else {
      res.json({ status: "Message Sent"})
    }
  });
});




// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inquiries",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
// app.use("/api", apiRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
