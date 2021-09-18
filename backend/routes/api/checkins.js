const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

const { CheckIn, User, Slice, Store } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const checkIns = await CheckIn.findAll({
        include: [User, Slice, Store],
        order: [["createdAt", "DESC"]],
    });

    return res.json(checkIns);
}))

router.post('/', asyncHandler(async (req, res) => {
    let { storeId, userId, sliceId, review, rating, image } = req.body;

    if (image.length <= 0) {
        await CheckIn.create({
            storeId,
            userId,
            sliceId,
            review,
            rating,
        })
    } else {
        await CheckIn.create({
            storeId,
            userId,
            sliceId,
            review,
            rating,
            image
        })
    }


    const checkIns = await CheckIn.findAll({
        where: {
            userId
        },
        include: [User, Slice, Store]
    });

    const newCheckIn = checkIns[0]
    return res.json(newCheckIn);
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
