const passport = require('passport');                               // Auth lib
const GoogleStrategy = require('passport-google-oauth20').Strategy  //Google Oauth
const keys = require('../config/keys');

passport.use(new GoogleStrategy({                                    // Tell passport to use new instance of Google strat
    clientID: keys.GoogleClientID,
    clientSecret: keys.GoogleClientSecret,
    callbackURL: '/auth/google/callback'                             // Route that you get redirected to in the app.
}, (accessToken, refreshToken, profile, done)=> {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
})
);  

