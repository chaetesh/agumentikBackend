const express = require("express");
const router = express.Router();
const SocialLink = require("../models/SocialLink");

router.post("/", async (req, res) => {
  const socialMediaLink = new SocialLink({
    name: req.body.name,
    url: req.body.url,
  });

  await socialMediaLink.save();

  res.status(201).json(socialMediaLink);
});

router.get("/", async (req, res) => {
  const socialMediaLinks = await SocialLink.find();

  res.status(200).json(socialMediaLinks);
});

module.exports = router;
