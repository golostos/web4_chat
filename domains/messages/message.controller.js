//@ts-check

const { getAllMessagesService } = require('./message.service')

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getAllMessages(req, res) {
    const messages = await getAllMessagesService()
    console.log('Cookies: ', req.cookies)
    res.send(messages)
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function setCookie(req, res) {
    res.cookie('Name_of_cookie', Date.now(), {
        httpOnly: true
    })
    res.send("Set cookie")
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getCookie(req, res) {
    console.log(req.cookies);
    res.send("Get cookie")
}

module.exports = {
    getAllMessages,
    setCookie,
    getCookie
}