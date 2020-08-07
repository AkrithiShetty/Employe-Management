const mongoose = require('mongoose');
const validator = require('validator');

const Employee = mongoose.model('Employee', {
	empId: {
		type: String,
		trim: true
	},
	name: {
		type: String,
		trim: true,
		required: true
	},
	position: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		trim: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		}
	},
	phone: {
		type: Number,
		required: true,
		trim: true,
		validate(value) {
			if (value.length < 10 || value.length > 10) {
				throw new Error('Enter valid Phone Number');
			}
		}
	},
	salary: {
		type: Number,
		trim: true
	},
	status: {
		type: String,
		default: 'Active'
	}
});

module.exports = Employee;
