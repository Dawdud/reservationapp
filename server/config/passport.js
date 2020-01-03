const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const user = require("../models").User;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, cb) {
      return user
        .findOne({
          where: {
            email: email
          }
        })
        .then(user => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password" });
          } else if (!user.validPassword(password)) {
            return cb(null, false, {
              message: "Incorrect password."
            });
          }
          return cb(null, user, { message: "Logged in  Sucessfully" });
        })
        .catch(err => cb(err));
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
/*passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },
    function(jwtPayload, cb) {
      return user
        .findAll({
          where: {
            id: jwtPayload.id
          }
        })
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);*/
module.exports = passport;
