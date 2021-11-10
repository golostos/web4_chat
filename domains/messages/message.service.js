// @ts-check

const Message = require("./message.model")

async function getAllMessagesService() {
    return Message.findAll()
}

module.exports = {
    getAllMessagesService
}