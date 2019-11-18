const express = require('express');         // common js import style
const app = express();                      // new app running express

// Example of a route handler
app.get('/', (req, res) => {
    res.send({ mr: 'pickles'});
});


// This is done so Heroku can inject the correct port into our app. or 5000 (development)
const PORT = process.env.port || 5000;
app.listen(PORT);