const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Slice } = require('../../db/models');

const router = express.Router();

const validateSlice = [
    check('name')
        .notEmpty()
        .withMessage('Please provide a valid slice name.'),
    check('name')
        .custom(value => {
            return Slice.findOne({ where: { name: value } })
                .then((slice) => {
                    if (slice) {
                        return Promise.reject('Pizza slice already exists.')
                    }
                })
        }),
    check('description')
        .notEmpty()
        .withMessage('Please provide a valid slice description.'),
    handleValidationErrors,
]

router.get('/', asyncHandler(async (req, res) => {
    const slices = await Slice.findAll();
    return res.json(slices);
}))

router.post('/', validateSlice, asyncHandler(async (req, res) => {
    const { name, description, addedBy } = req.body;
    const newSlice = await Slice.create({
        name,
        description,
        addedBy
    })

    return res.json(newSlice);
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { name, description, id } = req.body;
    const updateSlice = await Slice.findByPk(id)
    const newSlice = await updateSlice.update({
        name,
        description,
    })

    return res.json(newSlice);
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { id } = req.body;
    const slice = await Slice.findByPk(id)
    if (slice) {
        await slice.destroy();
    }
    return res.json(slice)
}));

module.exports = router;
