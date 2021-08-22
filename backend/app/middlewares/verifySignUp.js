const db = require("../models");
const validator = require('validator');
const ROLES = db.ROLES;
const User = db.user;
const Invite = db.invite;


checkUsername = (req, res, next) => {
  if (!validator.matches(req.body.username, "^[a-zA-Z0-9_\.\-]*$")) {
    res.status(400).send({ message: "Failed! Username must be only Characters, numbers, or . _ -" });
    return;
  }

  next();
}


checkInviteCode = (req, res, next) => {
  // Code
  Invite.findOne({
    invite_code: req.body.code
  }).exec((err, invite) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if(invite != null){
      if (invite.used_by != "") {
        res.status(400).send({ message: "Failed! Code Already Used!" });
        return;
      }
    } else {
      res.status(400).send({ message: "Failed! Invite Code Invalid!" });
        return;
    }
    next();
  });
}

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    // Username
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkUsername,
  checkInviteCode,
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;