const passport = require('passport');

module.exports = app => {
  // With the keyword "google", passport knows that GoogleStrategy is the one to use
  // although this module is called "passport-google-oauth20"
  app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile','email']
    })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );
  
  app.get(
    '/api/current_user', (req, res) => {
      res.send(req.user);
    }
  );

}