// @ts-check

const express = require('express');
const { getAllMessages, setCookie, getCookie } = require('./message.controller');
const messageRouter = express.Router();

// CRUD
messageRouter.get('/', getAllMessages)
// messageRouter.get('/:id', getMessage)
// messageRouter.post('/', createMessage)
// messageRouter.patch('/:id', updateMessage)
// messageRouter.delete('/:id', deleteMessage)


// messageRouter.post('/', setCookie)

// messageRouter.get('/cookie', getCookie)



module.exports = messageRouter

// HTTP method POST
// router.post('/', async (req, res) => {
//     const message = req.body
//     const messageFromDb = await Message.create(message)
//     res.send(messageFromDb)
// })