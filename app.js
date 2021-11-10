// @ts-check
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const messageRouter = require('./domains/messages/message.router');
const userRouter = require('./domains/users/user.router');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/chat/message', messageRouter);
app.use('/api/chat/user', userRouter);

module.exports = app;
