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
	Employee.findOneAndUpdate(
		{ _id: req.body._id },
		req.body,
		{ new: true },
		(err, doc) => {
			if (!err) {
				res.redirect('/manager');
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
});

router.get('/manager/:id', (req, res) => {
	Employee.findById(req.params.id, (err, doc) => {
		if (!err) {
			res.render('manager', {
				title: 'Update Employee',
				employee: doc
			});
		}
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

router.get('/approveLeave/:id', (req, res) => {
	Leave.findById(req.params.id, (err, doc) => {
		if (!err) {
			res.render('approveLeave', {
				title: 'Update Employee',
				leave: doc
			});
		}
	});
});

router.post('/approveLeave', (req, res) => {
	const status = req.body.status;
	Leave.findOneAndUpdate(
		{ _id: req.body._id },
		{ status },
		{ new: true },
		(err, doc) => {
			if (!err) {
				res.redirect('/approveLeave');
			} else console.log('Error during record update : ' + err);
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
	const name = req.body.name;
	const taskId = req.body.taskId;
	const taskName = req.body.taskName;
	const task = new Task({ empId, name, taskId, taskName });
	console.log(task);
	task
		.save()
		.then((success) => {
			res.redirect('/taskDetails');
		})
		.catch((e) => {
			console.log(e);
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

module.exports = router;
