const express = require('express');
const Employee = require('../models/employee');
router = express.Router();

router.get('/manager', (req, res) => {
	res.render('employee', { title: 'Manager', name: 'Akrithi' });
});

module.exports = router;
