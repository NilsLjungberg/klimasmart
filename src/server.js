const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("server running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  auth: {
    user: "nilsljungberg7@gmail.com",
    pass: "timbuktu92",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const phone = req.body.phone;
  const company = req.body.company;
  const message = req.body.message;

  const mail = {
    from: `${name} ${surname}`,
    to: "nilsljungberg7@gmail.com",
    subject: `klimasmart: Neuer Kontakt von ${name} ${surname}`,
    html: `
    <h4>Name: ${name} ${surname}</h4>
    <h5>Kontakt: ${email} / ${phone}</h5>
    <h5>Firmenname: ${company}</h5>
    <br/>
    <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
