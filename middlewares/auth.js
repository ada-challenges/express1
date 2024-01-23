// middlewares/auth.js

const fs = require('fs'); // Import the 'fs' module for file operations
const path = require('path'); // Import the 'path' module for file path manipulation

const usersFilePath = path.join(__dirname, '../data_users.json'); // Assuming 'data_users.json' is in the root directory
const allUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'))
console.log(allUsers[0])

const permissionsList = {
    "admin": ['products', 'stores', 'users'],
    "agent": ['products', 'stores'],
    "client": ['products']
}

const authorizate = (req, res, next) => {
    const requestedRoute = req.path
    const userPermissions = permissionsList[req.user.role]
    authorized = userPermissions.includes(requestedRoute.replace('/',''))
    
    console.log('req.user.role: ', req.user.role)
    console.log('userPermissions: ', userPermissions)
    console.log('requestedRoute: ', requestedRoute)
    console.log('authorized: ', authorized)
    
    if(!authorized) res.status(403).send('Não autorizado')
    
    next()
}

const authenticate = (req, res, next) => {

    const userLogin = req.headers.login
    const userPassword = req.headers.password
    
    const user = allUsers.find(
        user => 
            user.login === userLogin && 
            user.password === userPassword
    )

    if(!user) res.status(401).send('Usuário ou senha incorreta')

    req.user = user
    console.log('Authenticated:')
    console.log(user)
    next()

}

module.exports = { authorizate, authenticate };