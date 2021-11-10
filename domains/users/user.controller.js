// @ts-check

const { comparePassword, createPasswordHash, createToken } = require('../../services/auth.service')
const User = require('./user.model')

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const CreateNewUser = async (req, res) => {
    try {
        const newUser = req.body
        const userFromDb = await User.create({
            name: newUser.name,
            password: await createPasswordHash(newUser.password)
        })
        res.status(201).send(userFromDb)
    } catch (error) {
        res.status(403).send({ message: 'The name is not unique' })
    }
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const Login = async (req, res) => {
    const loginUser = req.body
    const userFromDb = await User.findOne({ where: { name: loginUser.name } })
    if (userFromDb && await comparePassword(loginUser.password, userFromDb.password)) {
        const token = 'bearer ' + createToken(userFromDb)
        res.cookie('Token', token, {
            httpOnly: true
        })
        res.send({
            success: true
        })
    } else {
        res.status(403).send({
            success: false
        })
    }
}

module.exports = {
    CreateNewUser,
    Login
}