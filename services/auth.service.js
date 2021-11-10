// ES module
// import jwt from 'jsonwebtoken'
// import bcryptjs from "bcryptjs";

// commonjs
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

function createToken(userFromDB) {
    const token = jwt.sign({ id: userFromDB.id }, process.env.JWT_SECRET,
        { expiresIn: "2 days" })
    return token
}

async function createPasswordHash(password) {
    const salt = await bcryptjs.genSalt(10)
    return bcryptjs.hash(password, salt)
}

async function comparePassword(password, hash) {
    if (typeof password === 'string') {
        const result = await bcryptjs.compare(password, hash)
        return result
    }
    else return false
}

function verifyToken(req, res, next) {
    if (req.cookies['token'] && req.cookies['token'].length) {
        const token = (req.cookies['token']).replace(/(bearer|jwt)\s+/, '')
        const verifyCallback  = (err, decodedToken) => {
            const token = decodedToken 
            if (err) {
                return next({ message: "Failed to authenticate token", statusCode: 401 })
            }
            req.credentials = { id: token.id }
            next()
        }
        jwt.verify(token, process.env.JWT_SECRET, verifyCallback)
    } else {
        return next({ message: "Failed to authenticate token", statusCode: 401 })
    }
}

module.exports = {
    createToken,
    createPasswordHash,
    comparePassword,
    verifyToken
}