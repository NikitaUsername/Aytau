const { validateAccessToken } = require("../services/tokens");



module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send('Пользователь не авторизован');
    }

    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) {
        return res.status(401).send('Пользователь не авторизован');
    }
    const userData = validateAccessToken(accessToken);
    if (!userData) {
        return res.status(401).send('Пользователь не авторизован');
    }
    req.user = userData;
    next();
}