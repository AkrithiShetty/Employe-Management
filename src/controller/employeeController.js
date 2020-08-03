const mongoose = require('mongoose');
const Employee = require('./models/employee');

const employeeController = {};

employeeController.list = (req, res) => {
	Employee.find({})
		.then((employees) => {
			res.render('./templates/views/list', { employees });
		})
		.catch((e) => {
			res.render('./templates/views/error', {
				title: 'Error No Employees to list'
			});
		});
};
