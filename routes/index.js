const router = require('express').Router();
const chargersRouter = require('./chargers');
const { authenticate } = require('../middlewares/AuthMiddleware');

router.use(authenticate);
router.use(chargersRouter);

module.exports = router;
