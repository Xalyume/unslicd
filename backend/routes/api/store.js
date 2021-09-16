const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Store } = require('../../db/models');

const router = express.Router();

outer.get('/', asyncHandler(async (req, res) => {
    const stores = await Store.findAll();
    return res.json(stores);
}))

router.post('/', asyncHandler(async (req, res) => {
    const { } = req.body;
    const newStore = await Store.create({

    })

    return res.json(newStore);
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { } = req.body;
    const updateStore = await Store.findByPk(id)
    const newStore = await updateStore.update({

    })

    return res.json();
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
