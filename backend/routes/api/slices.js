const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Slice } = require('../../db/models');

const router = express.Router();

const validateSlice = [
    check('name')
        .custom(value => {
            const check = Slice.findOne({ where: { name: value } })
            if (check) {
                return Promise.reject("Pizza Slice Already Exists!")
            }
        }),
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

// router.put('/', asyncHandler(async (req, res) => {
//     const { name, description, addedBy } = req.body;
//     const newSlice = await Slice.create({
//         name,
//         description,
//         addedBy
//     })

//    return res.json(newSlice);
// }));

// router.delete('/', asyncHandler(async (req, res) => {
//     const { name, description, addedBy } = req.body;
//     const newSlice = await Slice.create({
//         name,
//         description,
//         addedBy
//     })

//    return res.json(newSlice);
// }));

module.exports = router;
