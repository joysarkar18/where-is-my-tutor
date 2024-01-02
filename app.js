var createError = require('http-errors');
const { Sequelize } = require('sequelize');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'ep-late-dawn-28386266-pooler.ap-southeast-1.postgres.vercel-storage.com',
  username: 'default',
  password: 'FsjYCXPz4py2',
  database: 'verceldb',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // you can set it to true in production with a valid certificate
    }
  }
});

 sequelize.authenticate().then((res)=>{
  console.log("Data base connected");
 }).catch((err)=>{
  console.log("error occours");
  console.log(err);
 })
 
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
