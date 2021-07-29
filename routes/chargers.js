const router = require('express').Router();
const ChargerController = require('../controllers/ChargerController');

router.get('/chargers', ChargerController.getChargers);

module.exports = router;
