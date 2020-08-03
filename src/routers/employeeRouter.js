const express = require('express');

router = express.Router();

router.get('/employee', (req, res) => {
	res.render('employee', { title: 'Insert Employee', name: 'Akrithi' });
});
module.exports = router;
