const users = require('../services/users.js');
const Router = require('express').Router;

const router = new Router();

router.post('/auth/signin', users.registration);
router.post('/auth/login', users.login);
router.get('/auth/refresh', users.refresh);
router.get('/auth/logout', users.logOut);

module.exports = router;