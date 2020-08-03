const express = require('express');
const Employee = require('../models/employee');
const bodyParser = require('body-parser');
router = express.Router();

router.get('/employee', (req, res) => {
	res.render('employee', { title: 'Insert Employee', name: 'Akrithi' });
});

router.get('/list', (req, res) => {
	Employee.find({})
		.then((employees) => {
			res.json({ employees });
		})
		.catch((e) => {
			res.render('./templates/views/error', {
				title: 'Error No Employees to list',
				name: 'Akrithi'
			});
		});
});

router.use(bodyParser.json());
router.use(
	bodyParser.urlencoded({
		extended: true
	})
);
router.post('/employee', (req, res) => {
	const fullName = req.body.fullName;
	const email = req.body.email;
	const jobDescription = req.body.jobDescription;
	const phone = req.body.phone;

	const data = new Employee({
		empName: fullName,
		email,
		jobDescription,
		phoneNo: phone
	});
	console.log(data);
	data
		.save()
		.then((success) => {
			res.send('Inserted Successfully!!!!');
		})
		.catch((e) => {
			res.status(404).send('Error');
		});
});

module.exports = router;
