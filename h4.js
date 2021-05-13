const port = 8266;
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

app.use(function(req, res, next) {  next(createError(404)); });

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error '+err.status+' '+err+' '+err.message);
});

const mysqlx = require('@mysql/xdevapi');

mysqlx.getSession({
    user: 'xxxx',
    password: 'xxxx',
    host: 'localhost',
    port: '33060'
}).then(function (session){ myTable=session.getSchema('H4').getTable('event'); });

app.listen(port,()=> console.log("H4plugins listening on "+port))