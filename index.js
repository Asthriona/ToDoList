const Config = require('./config.json')
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();
const indexRouter = require('./routes/index');
mongoose.connect(Config.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>console.log('Connected to the database.'));
app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', 'Poggy!');
app.use('/', indexRouter)
app.listen(Config.port, console.log("App started and listening port: "+Config.port));