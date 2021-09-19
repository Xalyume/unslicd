const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Store } = require('../../db/models');

const router = express.Router();

const validateSlice = [
    check('name')
        .notEmpty()
        .withMessage('Please provide a valid store name.'),
    check('name')
        .custom(value => {
            return Store.findOne({ where: { name: value.toLowerCase() } })
                .then((store) => {
                    if (store) {
                        return Promise.reject('Store already exists.')
                    }
                })
        }),
    check('location')
        .notEmpty()
        .withMessage('Please provide a valid store location.'),
    check('description')
        .notEmpty()
        .withMessage('Please provide a valid store description.'),
    handleValidationErrors,
]

router.get('/', asyncHandler(async (req, res) => {
    const stores = await Store.findAll();
    return res.json(stores);
}))

router.post('/', validateSlice, asyncHandler(async (req, res) => {
    const { name, location, description, addedBy } = req.body;
    const newStore = await Store.create({
        name: name.toLowerCase(),
        location,
        description,
        addedBy
    })

    return res.json(newStore);
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { id, name, location, description } = req.body;
    const updateStore = await Store.findByPk(id)
    const newStore = await updateStore.update({
        name,
        location,
        description
    })

    return res.json(newStore);
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { id } = req.body;
    const store = await Store.findByPk(id)
    if (store) {
        await store.destroy();
    }
    return res.json(store)
}));

module.exports = router;
