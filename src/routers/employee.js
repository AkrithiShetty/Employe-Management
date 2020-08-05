const express = require('express');
const Employee = require('../models/employee');
const Leave = require('../models/leave');
const Task = require('../models/task');
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
			console.log('Success');
			res.render('employee', { title: 'Employees', name: 'Akrithi' });
		})
		.catch((e) => {
			console.log('Error during record insertion : ' + e);
		});
});

const updateRecord = (req, res) => {
	Employee.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				name: req.body.name,
				email: req.body.email,
				position: req.body.position,
				phone: req.body.phone
			}
		},
		(err, doc) => {
			if (!err) {
				res.render('employee', {
					title: 'Update Employee',
					name: 'Akrithi',
					employee: doc
				});
			}
		}
	);
};

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

router.get('/edit/:id', (req, res) => {
	Employee.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				name: req.body.name,
				address: req.body.address,
				position: req.body.position
			}
		},
		(err, doc) => {
			if (!err) {
				res.render('employee', {
					title: 'Update Employee',
					name: 'Akrithi',
					employee: doc
				});
			}
		}
	);
});

router.get('/edit/delete/:id', (req, res) => {
	Employee.findByIdAndDelete(req.params.id, (data, error) => {
		if (!error) {
			res.render('editOrUpdate');
		} else {
			console.log('Error in employee delete :' + error);
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

router.post('/task', (req, res) => {
	const empId = req.body.empId;
	const taskId = req.body.taskId;
	const taskName = req.body.taskName;
	const status = req.body;

	const data = new Task({
		empId,
		taskId,
		taskName,
		status
	});
	console.log(data);
	data
		.save()
		.then((success) => {
			res.render('taskList', { title: 'Apply Leave', name: 'Akrithi' });
		})
		.catch((e) => {
			console.log('Error during record insertion : ' + e);
		});
});

router.get('/task', (req, res) => {
	Task.find({})
		.then((data) => {
			res.render('tasklist', {
				title: 'Manager',
				name: 'Akrithi',
				list: data
			});
		})
		.catch((e) => {
			console.log('Error in retrieving employee list :' + e);
		});
});
module.exports = router;
