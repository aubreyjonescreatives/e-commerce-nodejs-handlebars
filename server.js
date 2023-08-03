// added packages

const express = require('express'); 
const app = express();  
 
// tutorial didn't have .engine as the last part of this code. It fixed handlebars error
const handlebars = require('express-handlebars').engine; 

// .env for our security

require('dotenv').config();

// port options

const port = process.env.PORT || 5000;


// access handlebars 

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`, 
    extname: 'hbs', 
    defaultLayout: 'index', 
    partialsDir: `${__dirname}/views/partials`
}));



// lets connect to our public folder thanks to express

app.use(express.static('public'));


const apiData = () => {
    return [
        {
            firstName: 'Ignicio', 
            lastName: 'Montoya'
        }
    ]
}



//lets send our index.html file to our port


app.get('/', (req, res) => {
    res.render('main', {layout: 'planB', suggestedProducts: apiData()}); 
});


// time to connect to our port so that it listens to our code


app.listen(port, () => {
    console.log(`Server now listening on port ${port} `);
});