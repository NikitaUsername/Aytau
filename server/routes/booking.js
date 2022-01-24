const booking = require('../services/booking.js');
const Router = require('express').Router;
const authMiddleware = require('../middlewares/authMiddleware');


const router = new Router();

router.post('/booking/getRooms', booking.getRooms);
router.get('/booking/getRequests', authMiddleware, booking.getRequests);
router.post('/booking/saveRequest', booking.sendRequest);

router.get('/booking/getBookings', booking.getBookings);

router.post('/booking/changeStatus', booking.changeStatus);
router.post('/booking/check', booking.checkBooking);
router.post('/booking/complete', booking.complete);

module.exports = router;