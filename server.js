// added packages

const express = require('express'); 
const app = express(); 
 
// .env for our security

require('dotenv').config();

// port options

const port = process.env.PORT || 5000;

//lets send a message to our port 

app.get('/', (req, res) => {
    res.send('Hello Node World !'); 
});


// time to connect to our port so that it listens to our code


app.listen(port, () => {
    console.log(`Server now listening on port ${port} `);
});