const express = require('express');
const Employee = require('../models/employee');
router = express.Router();

router.get('/', (req, res) => {
	res.render('manager', { title: 'Manager', name: 'Akrithi' });
});

module.exports = router;
