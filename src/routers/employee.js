const express = require('express');
const Employee = require('../models/employee');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/employee', (req, res) => {
	res.render('employee', { title: 'Insert Employee', name: 'Akrithi' });
});

router.get('/list', (req, res) => {
	Employee.find({})
		.then((data) => {
			res.render('list', {
				title: 'Employees',
				name: 'Akrithi',
				list: data
			});
		})
		.catch((e) => {
			console.log('Error in retrieving employee list :' + e);
		});
});

router.use(
	bodyParser.urlencoded({
		extended: true
	})
);
router.use(bodyParser.json());

router.post('/employee', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const position = req.body.position;
	const phone = req.body.phone;

	const data = new Employee({
		name,
		email,
		position,
		phone
	});
	console.log(data);
	data
		.save()
		.then((success) => {
			res.render('employee', { title: 'Employees', name: 'Akrithi' });
		})
		.catch((e) => {
			console.log('Error during record insertion : ' + e);
		});
});

router.get('/edit', (req, res) => {
	Employee.find((error, data) => {
		if (!error) {
			res.render('editOrUpdate', {
				title: 'Employees',
				name: 'Akrithi',
				list: data
			});
		} else {
			console.log('Error in retrieving employee list :' + error);
		}
	});
});

router.get('/edit/:id', (req, res) => {
	Employee.findById(req.params.id, (err, doc) => {
		if (!err) {
			res.render('employee', {
				title: 'Update Employee',
				name: 'Akrithi',
				employee: doc
			});
		}
	});
});

router.get('/edit/delete/:id', (req, res) => {
	Employee.findByIdAndDelete(req.params.id, (data, error) => {
		if (!error) {
			res.redirect('editOrUpdate');
		} else {
			console.log('Error in employee delete :' + error);
		}
	});
});

router.get('/edit/delete/:id', (req, res) => {
	Employee.findByIdAndDelete(req.params.id, (data, error) => {
		if (!error) {
			res.redirect('editOrUpdate');
		} else {
			console.log('Error in employee delete :' + error);
		}
	});
}); // 		runValidators: true

router.get('/edit/delete/:id', (req, res) => {
	Employee.findByIdAndDelete(req.params.id, (data, error) => {
		if (!error) {
			res.redirect('editOrUpdate');
		} else {
			console.log('Error in employee delete :' + error);
		}
	});
});
module.exports = router;
