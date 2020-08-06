const express = require('express');
const Employee = require('../models/employee');
const Leave = require('../models/leave');
const Task = require('../models/task');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/employee', (req, res) => {
	res.render('employee', { title: 'Insert Employee', name: 'Akrithi' });
});

router.use(
	bodyParser.urlencoded({
		extended: true
	})
);
router.use(bodyParser.json());

router.post('/employee', (req, res) => {
	if (req.body._id == '') insertRecord(req, res);
	else updateRecord(req, res);
});

const insertRecord = (req, res) => {
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
			console.log('Success');
			res.redirect('list');
		})
		.catch((e) => {
			console.log('Error during record insertion : ' + e);
		});
};

const updateRecord = (req, res) => {
	Employee.findOneAndUpdate(
		{ _id: req.body._id },
		req.body,
		{ new: true },
		(err, doc) => {
			if (!err) {
				res.redirect('list');
			} else {
				if (err.name == 'ValidationError') {
					handleValidationError(err, req.body);
					res.render('editOrUpdate', {
						title: 'Update Employee',
						employee: req.body
					});
				} else console.log('Error during record update : ' + err);
			}
		}
	);
};

router.get('/employee/:id', (req, res) => {
	Employee.findById(req.params.id, (err, doc) => {
		if (!err) {
			res.render('employee', {
				title: 'Update Employee',
				employee: doc
			});
		}
	});
});

router.get('/view/:id', (req, res) => {
	Employee.findById(req.params.id, (err, doc) => {
		if (!err) {
			res.render('viewEmployee', {
				title: 'Employee',
				employee: doc
			});
		}
	});
});

router.get('/list', (req, res) => {
	Employee.find((error, data) => {
		if (!error) {
			res.render('list', {
				title: 'Employees',
				name: 'Akrithi',
				list: data
			});
		} else {
			console.log('Error in retrieving employee list :' + error);
		}
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

router.get('/edit/delete/:id', (req, res) => {
	Employee.findByIdAndRemove(req.params.id, (err, doc) => {
		if (!err) {
			res.redirect('/list');
		} else {
			console.log('Error in employee delete :' + err);
		}
	});
});

router.get('/leave', (req, res) => {
	res.render('leave', {
		title: 'Apply Leave',
		name: 'Akrithi'
	});
});

router.post('/leave', (req, res) => {
	const empId = req.body.empId;
	const name = req.body.name;
	const fromDate = req.body.fromDate;
	const toDate = req.body.toDate;
	const reason = req.body.reason;
	const phone = req.body.phone;

	const data = new Leave({
		empId,
		name,
		fromDate,
		toDate,

		reason,
		phone
	});
	Employee.findOneAndUpdate(
		{ _id: req.body._id },
		req.body,
		{ new: true },
		(err, doc) => {
			if (!err) {
				res.redirect('editOrUpdate');
			} else console.log('Error during record update : ' + err);
		}
	);
	console.log(data);
	data
		.save()
		.then((success) => {
			res.render('leave', { title: 'Apply Leave', name: 'Akrithi' });
		})
		.catch((e) => {
			console.log('Error during record insertion : ' + e);
		});
});

router.get('/leaveStatus', (req, res) => {
	Leave.find((error, data) => {
		if (!error) {
			res.render('leaveStatus', {
				title: 'Leave',
				name: 'Akrithi',
				list: data
			});
		} else {
			console.log('Error in retrieving leave list :' + error);
		}
	});
});

router.get('/task', (req, res) => {
	Task.find((error, data) => {
		if (!error) {
			res.render('taskList', {
				title: 'Task',
				name: 'Akrithi',
				list: data
			});
		} else {
			console.log('Error in retrieving task list :' + error);
		}
	});
});

router.get('/saveStatus', (req, res) => {
	res.render('saveStatus', {
		title: 'Task',
		name: 'Akrithi'
	});
});

router.get('/saveStatus/:id', (req, res) => {
	Task.findById(req.params.id, (err, doc) => {
		if (!err) {
			res.render('saveStatus', {
				title: 'Task',
				task: doc
			});
		}
	});
});

router.post('/task', (req, res) => {
	Task.findOneAndUpdate(
		{ _id: req.body._id },
		req.body,
		{ new: true },
		(err, doc) => {
			if (!err) {
				res.redirect('/task');
			} else console.log('Error during record update : ' + err);
		}
	);
});

module.exports = router;
