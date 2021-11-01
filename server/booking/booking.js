const Rooms = require("../models/Rooms");
const Views = require("../models/Views");
const { col } = require("sequelize");

module.exports.getRooms = async (req, res) => {
    let rooms = await Rooms.findAll({
        attributes: [[col('view.type'), 'view'],
            'id', 'image', 'name',
            'places_qty', 'description',
            'price'],
        include: [
            {
                model: Views,
            }
        ],
        raw: true
    });
    res.send(rooms);
}