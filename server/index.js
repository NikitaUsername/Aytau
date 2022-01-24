require('dotenv').config();
const PORT = process.env.PORT;
global.root = __dirname;
const express = require('express');
const { db } = require("./src/database");
var { json, urlencoded } = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bookings = require('./routes/booking');
const auth = require('./routes/auth');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(express.static(__dirname));
app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(cors());

app.use('/api', auth);

//  app.use(authMiddleware);

app.use('/api', bookings);


app.listen(PORT, async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`started on port ${PORT}...`);
});