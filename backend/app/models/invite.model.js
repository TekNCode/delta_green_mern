const mongoose = require("mongoose");

const Invite = mongoose.model(
  "Invite",
  new mongoose.Schema({
    invite_code: String,
    used_by: String
  })
);

module.exports = Invite;