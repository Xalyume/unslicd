const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js')
const slicesRouter = require('./slices.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/slices', slicesRouter);

module.exports = router;
