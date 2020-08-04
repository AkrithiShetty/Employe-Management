const express = require('express');
const Employee = require('../models/employee');
const bodyParser = require('body-parser');
const employeeController = require('../controllers/employee');
router = express.Router();

router.get('/', (req, res) => {
	employeeController.list(req, res);
});

router.get('/show/:id', (req, res) => {
	employeeController.show(req, res);
});

router.get('/create', (req, res) => {
	employeeController.create(req, res);
});

// Save employee
router.post('/save', (req, res) => {
	employeeController.save(req, res);
});

// Edit employee
router.get('/edit/:id', (req, res) => {
	employeeController.edit(req, res);
});

// Edit update
router.post('/update/:id', (req, res) => {
	employeeController.update(req, res);
});

// Edit update
router.post('/delete/:id', (req, res, next) => {
	employeeController.delete(req, res);
});

module.exports = router;

// router.get('/', (req, res) => {
// 	res.render('employee', { title: 'Insert Employee', name: 'Akrithi' });
// });

// router.get('/list', (req, res) => {
// 	Employee.find({})
// 		.then((data) => {
// 			res.render('list', {
// 				title: 'Employees',
// 				name: 'Akrithi',
// 				list: data
// 			});
// 		})
// 		.catch((e) => {
// 			console.log('Error in retrieving employee list :' + e);
// 		});
// });

// router.use(
// 	bodyParser.urlencoded({
// 		extended: true
// 	})
// );
// router.use(bodyParser.json());

// router.post('/', (req, res) => {
// 	const fullName = req.body.fullName;
// 	const email = req.body.email;
// 	const jobDescription = req.body.jobDescription;
// 	const phone = req.body.phone;

// 	const data = new Employee({
// 		empName: fullName,
// 		email,
// 		position: jobDescription,
// 		phoneNo: phone
// 	});
// 	console.log(data);
// 	data
// 		.save()
// 		.then((success) => {
// 			res.render('employee', { title: 'Employees', name: 'Akrithi' });
// 		})
// 		.catch((e) => {
// 			console.log('Error during record insertion : ' + e);
// 		});
// });

// router.get('/edit', (req, res) => {
// 	Employee.find((error, data) => {
// 		if (!error) {
// 			res.render('editOrUpdate', {
// 				title: 'Employees',
// 				name: 'Akrithi',
// 				list: data
// 			});
// 		} else {
// 			console.log('Error in retrieving employee list :' + error);
// 		}
// 	});
// });

// router.get('/edit/:id', (req, res) => {
// 	Employee.findById(req.params.id, (err, doc) => {
// 		if (!err) {
// 			res.render('employee', {
// 				title: 'Update Employee',
// 				name: 'Akrithi',
// 				employee: doc
// 			});
// 		}
// 	});
// });

// router.post('/edit/:id', (req, res) => {
// 	const user = Employee.findByIdAndUpdate({ _id: req.params.id }, req.body, {
// 		new: true,
// 		runValidators: true
// 	});
// 	if (user) {
// 		res.redirect('editOrUpdate');
// 	} else {
// 		console.log('Error during record update : ' + err);
// 	}
// });

// router.get('/edit/delete/:id', (req, res) => {
// 	Employee.findByIdAndDelete(req.params.id, (data, error) => {
// 		if (!error) {
// 			res.redirect('editOrUpdate');
// 		} else {
// 			console.log('Error in employee delete :' + error);
// 		}
// 	});
// });
