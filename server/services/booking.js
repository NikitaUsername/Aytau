const key = process.env.KEY;
const clientHost = process.env.CLIENT_HOST;
const Rooms = require("../models/Rooms");
const Views = require("../models/Views");
const Bookings = require("../models/Bookings");
const { db } = require("../src/database");
const { col, Op } = require("sequelize");
const BookingStatuses = require("../models/BookingStatuses");
const { sendMail } = require('../mailer/mailer');
const CryptoJS = require("crypto-js");
const moment = require('moment')


module.exports.getRooms = async (req, res) => {
    let start = new Date(moment(req.body.start));
    let end = new Date(moment(req.body.end));
    
    let bookings = await Bookings.findAll({
        attributes: ['roomId'],
        where: {
            deletedAt: null,
            statusId: 2,
            [Op.not]: {
                [Op.or]: [
                    {
                        endDate: { [Op.lte]: start }
                    },
                    {
                        startDate: { [Op.gte]: end }
                    },
                ]
            }
        },
        raw: true
    });

    let roomsExclude = [];

    for (let el of bookings) {
        roomsExclude.push(el.roomId)
    };

    let rooms = await Rooms.findAll({
        attributes: [[col('view.type'), 'view'],
            'id', 'image', 'name',
            'placesQty', 'description',
            'price'],
        where: {
            id: { [Op.notIn]: roomsExclude }
        },
        include: [
            {
                model: Views,
            },
        ],
        raw: true
    });
    res.send(rooms);
};

module.exports.sendRequest = async (req, res) => {
    let data = req.body;

    let answer = {
        data: {},
        success: true,
        error: null
    };

    let bookingData = {
        endDate: data.endDate,
        startDate: data.startDate,
        adults: data.adults,
        children: data.children,
        roomId: data.room,
        name: data.name,
        surname: data.surname,
        fathersName: data.fathersName,
        email: data.email,
        phone: data.phone,
        comment: data.comment,
        needTransfer: data.transfer,
        statusId: 1,
        totalAmount: data.totalAmount
    }
    try {
        await Bookings.create(bookingData);
    } catch (error) {
        answer.success = false;
        answer.error = error;
    }
    res.send(answer);
};

module.exports.getRequests = async (req, res) => {
    console.log(req.user)
    let answer = {
        data: {},
        success: true,
        error: null
    };

    let data = await Bookings.findAll({
        where: {
            deletedAt: null,
        },
        include: [
            {
                model: Rooms,
            },
            {
                model: BookingStatuses,
            }
        ],
        raw: true
    });
    answer.data = data;
    res.send(answer);
};

module.exports.changeStatus = async (req, res) => {
    let answer = {
        data: {},
        success: true,
        error: null
    };

    let statusId = req.body.statusId;
    let bookingId = req.body.bookingId;
    let email = req.body.email;

    const t = await db.transaction();
    try {
        await Bookings.update(
            {
                statusId: statusId
            },
            {
                where: {
                    id: bookingId,
                },
                transaction: t
            });

        if (statusId === 3) {
            let cipherId = CryptoJS.AES.encrypt(bookingId.toString(), key).toString();

            const htmlBody =
                `<div>
                    <h2>
                        Здравствуйте User!
                    </h2>
                    Для завершения бронирования перейдите по 
                    <a href="${clientHost}/booking/complete?booking=${encodeURIComponent(cipherId)}">
                        ссылке
                    </a>
                </div>`;

            let sended = await sendMail(email, 'Заявка на бронирование', htmlBody);

            if (!sended) {
                throw ('mail error');
            }
        }

        await t.commit();
    } catch (error) {
        await t.rollback();
        console.log(error)
        answer.error = error.toString();
        answer.success = false;
    }

    res.send(answer);
};

module.exports.complete = async (req, res) => {
    const { cipherId } = req.body;
    const { statusId } = req.body;

    let answer = {
        data: {},
        success: true,
        error: null
    };

    const t = await db.transaction();
    try {
        let bookingId = CryptoJS.AES.decrypt(decodeURIComponent(cipherId), key).toString(CryptoJS.enc.Utf8);

        await Bookings.update(
            {
                statusId: statusId
            },
            {
                where: {
                    id: bookingId,
                },
                transaction: t
            });

        await t.commit();
    } catch (error) {
        await t.rollback();
        console.log(error)
        answer.error = error.toString();
        answer.success = false;
    }

    res.send(answer);
};

module.exports.checkBooking = async (req, res) => {
    const { cipherId } = req.body;

    let answer = {
        data: {},
        success: true,
        error: null
    };

    let bookingId = CryptoJS.AES.decrypt(decodeURIComponent(cipherId), key).toString(CryptoJS.enc.Utf8);

    let booking = await Bookings.findByPk(bookingId);

    answer.data = booking;
    res.send(answer);
};

module.exports.getBookings = async (req, res) => {
    let answer = {
        data: {},
        success: true,
        error: null
    };

    let bookings = await Rooms.findAll({
        attributes: ['name', 'id'],
        where: {
            deletedAt: null
        },
        include: [{
            model: Bookings,
            required: false,
            attributes: [['startDate', 'start'], ['endDate', 'end'],
                'id',
                'adults',
                'children',
                'name',
                'surname',
                'fathersName',
                'email',
                'phone',
                'comment'],
            where: {
                deletedAt: null,
                statusId: 2
            }
        }],
    })

    let data = [];

    for (let booking of bookings) {
        for (let el of booking.bookings) {
            el.dataValues.id = el.dataValues.id.toString();
        }
        data.push({
            name: booking.name,
            background_color: 'grey',
            bookings: booking.bookings
        })
    }
    answer.data = data
    res.send(answer)
};

