// middlewares/auth.js
const jwt = require('jsonwebtoken');

const permissionsList = {
    "admin": ['products', 'stores', 'users'],
    "agent": ['products', 'stores'],
    "client": ['products']
}

// const authorizate = (req, res, next) => {
//     const requestedRoute = req.path
//     const userPermissions = permissionsList[req.user.role]
//     authorized = userPermissions.includes(requestedRoute.replace('/',''))
    
//     console.log('req.user.role: ', req.user.role)
//     console.log('userPermissions: ', userPermissions)
//     console.log('requestedRoute: ', requestedRoute)
//     console.log('authorized: ', authorized)
    
//     if(!authorized) res.status(403).send('Não autorizado')
    
//     next()
// }

const authenticate = (req, res, next) => {
    const accessToken = req.cookies.access_token;
    if(!accessToken) 
        return res.status(403).json({message: "Token não informado"});
    
    try {
        jwt.verify(accessToken, process.env.PRIVATE_KEY);
        next();
    } catch (error) {
        return res.status(403).json({message: error});
    }
}

module.exports = { authenticate };