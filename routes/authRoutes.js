
const passport = require('passport');                                // origonal passport npm handler


module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {            // The google string refers to the whole GoogleStrategy 
        scope: ['profile', 'email']                                      // This is what access we want from google. we want profile and their email
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google', {   // Exchanges the code for the actual user profile
    
        })
    );
}
