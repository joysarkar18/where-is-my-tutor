// external import
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// database
const sequelize = require("./utils/database")

//models
const Teacher = require('./models/teacher/teacher')
const Student = require('./models/student/student')
const StudentDetails = require("./models/student/studentDetails")
// routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const updateDetailsRouter = require('./routes/updateUserDetails')


var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/auth", authRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/update-details', updateDetailsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: "path not found" })
});

Student.hasOne(StudentDetails);

sequelize.sync({ force: true }).then((r) => {
  console.log("sync");
}).catch((e) => {
  console.log("error1", e);
})

module.exports = app;
