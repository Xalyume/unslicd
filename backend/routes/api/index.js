const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const slicesRouter = require('./slices.js');
const storesRouter = require('./stores.js');
const checkInRouter = require('./checkins.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/slices', slicesRouter);
router.use('/stores', storesRouter);
router.use('/checkins', checkInRouter);

module.exports = router;
