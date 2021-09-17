const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { CheckIn } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const checkIns = await CheckIn.findAll();
    return res.json(checkIns);
}))

router.post('/', asyncHandler(async (req, res) => {
    const { storeId, userId, sliceId, review, rating, image } = req.body;
    const newCheckIn = await CheckIn.create({
        storeId,
        userId,
        sliceId,
        review,
        rating,
        image
    })

    return res.json(newCheckIn);
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { id } = req.body;
    const checkin = await CheckIn.findByPk(id)
    if (checkin) {
        await checkin.destroy();
    }
    return res.json(slice)
}))

module.exports = router;
