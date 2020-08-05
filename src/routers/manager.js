const express = require('express');
const Employee = require('../models/employee');
const Leave = require('../models/leave');
const Task = require('../models/task');
router = express.Router();

router.get('/manager', (req, res) => {
	Employee.find({})
		.then((data) => {
			res.render('manageEmployee', {
				title: 'Manager',
				name: 'Akrithi',
				list: data
			});
		})
		.catch((e) => {
			console.log('Error in retrieving employee list :' + e);
		});
});

router.post('/manager', (req, res) => {
	const user = Employee.findByIdAndUpdate(
		req.params.id,
		{ empId: req.body.empId, salary: req.body.salary },
		{
			new: true,
			runValidators: true
		}
	);
	console.log(user);
	if (user) {
		res.render('manager', {
			title: 'Employees',
			name: 'Akrithi',
			employee: user
		});
	}
});

router.post('/manager/:id', (req, res) => {
	Employee.findByIdAndUpdate(
		req.params.id,
		{ empId: req.body.empId, salary: req.body.salary },
		{
			new: true,
			runValidators: true
		}
	);
	console.log(user);
	if (user) {
		res.render('manager', {
			title: 'Employees',
			name: 'Akrithi',
			employee: user
		});
	}
});

router.get('/manager/:id', (req, res) => {
	Employee.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				empId: req.body.empId,
				salary: req.body.salary
			}
		},
		{ new: true, runValidators: true },
		(err, doc) => {
			if (!err) {
				res.render('manager', {
					title: 'Employees',
					name: 'Akrithi',
					employee: doc
				});
			}
		}
	);
});

router.get('/updateTask', (req, res) => {
	res.render('task', {
		title: 'Task',
		name: 'Akrithi'
	});
});

router.post('/updateTask', (req, res) => {
	const empId = req.body.empId;
	const taskId = req.body.taskId;
	const taskName = req.body.taskName;
	const task = new Task({ empId, taskId, taskName });
	console.log(task);
	task
		.save()
		.then((success) => {
			res.render('taskStatus', {
				title: 'Task Status',
				name: 'Akrithi'
			});
		})
		.catch((e) => {
			console.log(e);
		});
});

router.get('/approveLeave', (req, res) => {
	Leave.find({})
		.then((data) => {
			res.render('manageLeave', {
				title: 'Leave ',
				name: 'Akrithi',
				list: data
			});
		})
		.catch((e) => {
			console.log('Error in retrieving leave list :' + e);
		});
});

router.get('/taskDetails', (req, res) => {
	Task.find({})
		.then((data) => {
			res.render('taskStatus', {
				title: 'Task Status ',
				name: 'Akrithi',
				list: data
			});
		})
		.catch((e) => {
			console.log('Error in retrieving leave list :' + e);
		});
});

router.get('/approveLeave/:id', (req, res) => {
	Leave.find({})
		.then((data) => {
			res.render('approveLeave', {
				title: 'Leave ',
				name: 'Akrithi',
				list: data
			});
		})
		.catch((e) => {
			console.log('Error in retrieving leave list :' + e);
		});
});

router.post('/approveLeave', (req, res) => {
	const empId = req.body.empId;
	const status = req.body.approve;
	Leave.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				empId,
				status
			}
		},
		{ new: true, runValidators: true },
		(err, doc) => {
			if (!err) {
				res.render('approveLeave', {
					title: 'Employees',
					name: 'Akrithi',
					leave: doc
				});
			}
		}
	);
});

module.exports = router;
