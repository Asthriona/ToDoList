const Config = require('./config.json')
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();
const indexRouter = require('./routes/index');
const funRouter = require('./routes/FunStuff');
const fuckRouter = require('./routes/FuckOff');
const NeedRouter = require('./routes/NeedToDo');
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
app.use('/', indexRouter);
app.use('/Stuff_I_want_to_do_but_isnt_needed', funRouter);
app.use('/This_can_piss_off', fuckRouter);
app.use('/NeedToDo', NeedRouter);
app.listen(Config.port, console.log("App started and listening port: "+Config.port));