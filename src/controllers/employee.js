const mongoose = require('mongoose');
const Employee = require('../models/Employee');

const employeeController = {};

employeeController.list = (req, res) => {
	Employee.find({}).exec(function (err, employees) {
		if (err) {
			console.log('Error:', err);
		} else {
			res.render('/employee/index', { employees: employees });
		}
	});
};

employeeController.show = function (req, res) {
	Employee.findOne({ _id: req.params.id }).exec(function (err, employee) {
		if (err) {
			console.log('Error:', err);
		} else {
			res.render('./employee/show', { employee: employee });
		}
	});
};

// Create new employee
employeeController.create = function (req, res) {
	res.render('./employee/create');
};

// Save new employee
employeeController.save = function (req, res) {
	var employee = new Employee(req.body);

	employee.save(function (err) {
		if (err) {
			console.log(err);
			res.render('./employee/create');
		} else {
			console.log('Successfully created an employee.');
			res.redirect('./employee/show/' + employee._id);
		}
	});
};

// Edit an employee
employeeController.edit = function (req, res) {
	Employee.findOne({ _id: req.params.id }).exec(function (err, employee) {
		if (err) {
			console.log('Error:', err);
		} else {
			res.render('./employee/edit', { employee: employee });
		}
	});
};

// Update an employee
employeeController.update = function (req, res) {
	Employee.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				name: req.body.name,
				address: req.body.address,
				position: req.body.position,
				salary: req.body.salary
			}
		},
		{ new: true },
		function (err, employee) {
			if (err) {
				console.log(err);
				res.render('./employee/edit', { employee: req.body });
			}
			res.redirect('/employee/show/' + employee._id);
		}
	);
};

// Delete an employee
employeeController.delete = function (req, res) {
	Employee.remove({ _id: req.params.id }, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Employee deleted!');
			res.redirect('/employee');
		}
	});
};
