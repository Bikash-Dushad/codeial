const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
require('./config/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(expressLayout);

app.use(express.static('./assets'));

app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen( port, function(err){
    if(err){
        console.log(` some error : ${err}`);
    }
    else{
        console.log(` server is running on port : ${port}`);
    }
})