const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const user = require("../models").User;

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function(email, password, cb) {
      //Assume there is a DB module pproviding a global UserModel
      return user
        .findOne({
          where: {
            email: email,
          },
        })
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }

          return cb(null, user, {
            message: "Logged In Successfully",
          });
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        "oUoWbw923fHBZDsH68Hf625yYb8tBsIAs24hdZeOzfd4qT3IIrW2jI69Rrdo8mp",
    },
    function(jwtPayload, cb) {
      //find the user in db if needed
      return user
        .findOne({
          id: jwtPayload.id,
        })
        .then((user) => {
          return cb(null, user);
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

module.exports = passport;
