const express = require('express')

const controller = require('../controller/quoteController');

const router = express.Router()

// api/quotes
router.route('/')
  .get(controller.getMany)
  .post(controller.createOne)

// api/quotes/:id
router.route('/:id')
  .get(controller.getOne)
  .put(controller.updateOne)
  .delete(controller.removeOne)

module.exports = router;