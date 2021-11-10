// @ts-check
const express = require('express');
const { CreateNewUser, Login } = require('./user.controller');
const userRouter = express.Router();

userRouter.post('/', CreateNewUser)

userRouter.post('/login', Login)

module.exports = userRouter
