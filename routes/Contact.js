const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/form", (req, res) => {
  // Get the form data.
  const name = req.body.name;
  const email = req.body.email;

  const contact = new Contact({
    name,
    email,
  });

  // Save the document to MongoDB.
  contact.save((err, contact) => {
    if (err) {
      console.log(err);
      res.send(500);
      return;
    }

    // Send a success response.
    res.send("Your form has been submitted!");
  });
});

module.exports = router;