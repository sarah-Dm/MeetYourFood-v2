require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

//user est accessible parout
module.exports = (req, res, next) => {
  res.locals.user = req.session.currentUser;
  next();
};

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express();
require('./configs/session.config')(app);

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

// Express View engine setup
app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true,
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// allow access to the API from different domains/origins
app.use(
  cors({
    // this could be multiple domains/origins, but we will allow just our React app
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use((req, res, next) => {
  if (req.session.currentUser) res.locals.currentUser = req.session.currentUser;
  next();
});

const auth = require('./routes/auth.route');
app.use('/api', auth);

const profile = require('./routes/profile.route');
app.use('/api', profile);

const comment = require('./routes/comment.route');
app.use('/api', comment);

const search = require('./routes/recherche.route');
app.use('/api', search);

const upload = require('./routes/file-upload.route');
app.use('/api', upload);

// ou 2) Serve static files from client/build folder
app.use(express.static(path.join(__dirname, 'MYF_client/build')));

// ou 3) For any other routes: serve client/build/index.html SPA
app.use((req, res, next) => {
  res.sendFile(`${__dirname}/MYF_client/build/index.html`, (err) => {
    if (err) next(err);
  });
});

module.exports = app;
