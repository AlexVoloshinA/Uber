const express = require('express');
const router = express.Router();
const DriversController = require('../controllers/driver_controller');

router.get('/', DriversController.greeting);
router.post('/drivers', DriversController.create);
router.put('/drivers/:id', DriversController.edit);
router.delete('/drivers/:id', DriversController.delete);
router.get('/drivers', DriversController.index);

module.exports = router;