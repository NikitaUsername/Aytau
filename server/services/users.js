const bcrypt = require('bcrypt');
const Users = require('../models/Users');
const UsersTokens = require('../models/UsersTokens');
const { generateTokens, saveToken, validateAccessToken, validateRefreshToken } = require('./tokens');

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({
            attributes: ['id', 'password', 'email', 'name', 'surname', 'postId'],
            where: {
                email: email,
                deletedAt: null
            }
        });
        if (!user) {
            throw ('Нет пользователя с таким E-mail!');
        };

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ('Неверный пароль!');
        }

        const tokens = generateTokens({ id: user.id, email: user.email });
        await saveToken(user.id, tokens.refreshToken);
        res.cookie('refreshToken', tokens.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
        user.password = undefined;
        res.send(
            {
                tokens,
                user
            });
    } catch (error) {
        res.status(400).send(error.toString());
    }
}

module.exports.registration = async (req, res) => {
    const { email, password } = req.body;

    try {
        const candidate = await Users.findOne({
            where: {
                email: email,
                deletedAt: null
            }
        });
        if (candidate) {
            throw ('Пользователь с таким Email уже существует!')
        }

        const hashpassword = await bcrypt.hash(password, 5);
        const user = await Users.create({
            email,
            password: hashpassword,
            postId: 1
        });

        const tokens = generateTokens({ id: user.id, email: user.email });
        await saveToken(user.id, tokens.refreshToken);

        res.cookie('refreshToken', tokens.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
        res.send(tokens);
    } catch (error) {
        res.status(400).send(error.toString());
    }
}


module.exports.refresh = async (req, res) => {
    const { refreshToken } = req.cookies;

    try {
        if (!refreshToken) {
            throw 'no refresh token';
        }
        const userData = validateRefreshToken(refreshToken);
        const tokenData = await UsersTokens.findOne({
            where: {
                token: refreshToken
            }
        });

        if (!userData || !tokenData) {
            throw 'refresh expired';
        };

        const user = await Users.findByPk(userData.id,
            {
                attributes: ['id', 'email', 'name', 'surname', 'postId'],
            });

        const tokens = generateTokens({ id: user.id, email: user.email });
        await saveToken(user.id, tokens.refreshToken);
        res.cookie('refreshToken', tokens.refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
        res.send(
            {
                tokens,
                user
            });
    } catch (error) {
        console.log(error.toString())
        res.status(401).send('Пользователь не авторизован!');
    }
}


module.exports.logOut = async (req, res) => {
    const { refreshToken } = req.cookies;
    await UsersTokens.destroy({
        where:{
            token: refreshToken
        }
    });
    res.clearCookie('refreshToken');
    res.send(true);
}
