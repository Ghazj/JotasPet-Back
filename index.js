const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database.js');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/turnos',require('./routes/turnos.routes.js'));


//statics files


//starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port ' + String(app.get('port')));
})

//Primera subida a heroku