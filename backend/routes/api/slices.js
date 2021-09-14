const express = require('express');
const asyncHandler = require('express-async-handler');

const { Slice } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const slices = await Slice.findAll();
    res.json(slices);
}))

router.post('/', asyncHandler(async (req, res) => {
    const { name, description, addedBy } = req.body;
    const newSlice = await Slice.create({
        name,
        description,
        addedBy
    })

    res.json(newSlice);
}))

module.exports = router;
