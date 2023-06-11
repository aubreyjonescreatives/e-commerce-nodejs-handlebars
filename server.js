// added packages

const express = require('express'); 
const app = express(); 
 
// .env for our security

require('dotenv').config();

// port options

const port = process.env.PORT || 5000;


// lets connect to our public folder thanks to express

app.use(express.static('public'));

//lets send our index.html file to our port 

app.get('/', (req, res) => {
    res.send('index'); 
});


// time to connect to our port so that it listens to our code


app.listen(port, () => {
    console.log(`Server now listening on port ${port} `);
});