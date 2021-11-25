const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

const { CheckIn, User, PizzaSlice, Store } = require('../../db/models');

const router = express.Router();

const validateSlice = [
    check('storeId')
        .notEmpty()
        .withMessage('Please provide a valid slice.'),
    check('sliceId')
        .notEmpty()
        .withMessage('Please provide a valid store.'),
    check('review')
        .notEmpty()
        .withMessage('Please provide a valid review.'),
    check('rating')
        .notEmpty()
        .withMessage('Please provide a valid rating.'),
    handleValidationErrors,
]

router.get('/', restoreUser, asyncHandler(async (req, res) => {

    const checkIns = await CheckIn.findAll({
        where: {
            userId: req.user.id
        },
        order: [["createdAt", "ASC"]],
        include: [User, PizzaSlice, Store],
    });

    return res.json(checkIns);
}))

router.get('/all', restoreUser, asyncHandler(async (req, res) => {

    const allCheckIns = await CheckIn.findAll({
        order: [["createdAt", "ASC"]],
        include: [User, PizzaSlice, Store],
    });

    return res.json(allCheckIns);
}))

router.post('/', validateSlice, asyncHandler(async (req, res) => {
    let { storeId, userId, sliceId, review, rating, image } = req.body;

    let newCheckIn;

    if (image.length <= 0) {
        newCheckIn = await CheckIn.create({
            storeId,
            userId,
            sliceId,
            review,
            rating,
        })
    } else {
        newCheckIn = await CheckIn.create({
            storeId,
            userId,
            sliceId,
            review,
            rating,
            image
        })
    }

    const checkIn = await CheckIn.findByPk(
        newCheckIn.id,
        {
            include: [User, PizzaSlice, Store]
        });

    return res.json(checkIn);
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { id } = req.body;
    const checkin = await CheckIn.findByPk(id)
    if (checkin) {
        await checkin.destroy();
    }
    return res.json(checkin)
}))

module.exports = router;
