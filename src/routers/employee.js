const express = require('express');

router = express.Router();

router.get('', (req, res) => {
	res.send('Employee');
});

module.exports = router;
