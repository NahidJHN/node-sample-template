const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const config = require('../config/config')
const jwt=require("jsonwebtoken")
const userService = require("../services/user.service")


// const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user, info) => {
//   if (err || info || !user) {
//     return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
//   }
//   req.user = user;
  
//   if (requiredRights.length) {
//     const userRights = roleRights.get(user.role);
//     const hasRequiredRights = requiredRights.every((requiredRight) => userRights.includes(requiredRight));
//     if (!hasRequiredRights && req.params.userId !== user.id) {
//       return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
//     }
//   }

//   resolve();
// };

// const auth = (...requiredRights) => async (req, res, next) => {
//   return new Promise((resolve, reject) => {
//     passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(req, res, next);
//   })
//     .then(() => next())
//     .catch((err) => next(err));
// };

// module.exports = auth;


const auth = (roles) => async (req, res, next) => {
  try {
    const { authorization } = req.headers

    const token = authorization.split(' ')[1]

    if (!token) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, 'Please login to access this resource'))
    }
    const decoded = jwt.verify(token, config.jwt.secret)

    if (!decoded) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token.'))
    }
    const user = await userService.getUserById(decoded.sub)
    if (roles.indexOf(user.role) === -1) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, 'Not authorized.'))
    }
    req.user = user
    req.user.password = undefined
    next()
  } catch (err) {
    return next(new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token.'))
  }
}

module.exports = auth
