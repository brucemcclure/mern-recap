const express = require('express');                                 // common js import style
require('./services/passport');             
const app = express();                                              // new app running express


// This require statement returns a function. Because thats what we exported from the file (take a look)
// We immediately pass the app to that function
                               
require('./routes/authRoutes')(app)



// This is done so Heroku can inject the correct port into our app. or 5000 (development)
const PORT = process.env.port || 5000;
app.listen(PORT);