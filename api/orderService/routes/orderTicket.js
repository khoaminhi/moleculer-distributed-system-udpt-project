var express = require('express');
var router = express.Router();

const orderTicket = require('../controllers/orderTicketController')

router.get('/listByUserID/:id', orderTicket.listByUserID);
router.get('/listAll', orderTicket.listAll);
router.post('/add', orderTicket.add);

module.exports = router;
