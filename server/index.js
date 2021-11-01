require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const { db } = require("./src/database");
global.root = __dirname;


const booking = require('./booking/booking.js');

const app = express();

app.get('/api/booking/getRooms', booking.getRooms);


app.use(
    express.static(__dirname)
);

app.listen(PORT, async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`started on port ${PORT}...`);
});