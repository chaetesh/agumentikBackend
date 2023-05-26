// This is schema, With Mongoose everything is derived from a Schema.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const SocialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
// We are exporting the model, we are compiling Schema into model.
// A model is a class with which we construct documents.
module.exports = mongoose.model("social", SocialSchema);
