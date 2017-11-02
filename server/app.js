const express = require('express');
const routes = require('./routes/index');
const newsRoute = require('./routes/news');
const authRoute = require('./routes/auth');

const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require('passport');
const authCheckMiddleware = require('./middleware/authCheck');


require('dotenv').config();

let app = express();
const PORT = process.env.PORT || 3002;

const dbURL = process.env.MONGO_DB_URL

mongoose.connect(dbURL, function(err){
  if(err){
    console.log('Error connecting to: '+ dbURL)
  }
  else{
    console.log('Connected to: '+ dbURL)
  }
})

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use('/user', authRoute);

app.use('/news/:id/comment', authCheckMiddleware);
app.use('/news', newsRoute);







app.listen(PORT, function () {
	console.log(`Listening on port ${PORT}`);
});

