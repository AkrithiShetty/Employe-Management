const mongoose = require('mongoose');
const validator = require('validator');

const Leave = mongoose.model('Leave', {
	empId: {
		type: String,
		trim: true,
		require: true
	},
	name: {
		type: String,
		trim: true,
		required: true
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
	toDate: {
		type: String,
		trim: true,
		required: true
	},
	fromDate: {
		type: String,
		trim: true,
		required: true
	},

	reason: {
		type: String,
		required: true,
		trim: true
	},
	status: {
		type: String,
		default: 'Pending'
	}
});

// const l = new Leave({
// 	name: 'Akrithi',
// 	empId: 'E1',
// 	fromDate: '12/05/2020',
// 	toDate: '15/05/2020',
// 	reason: 'function',
// 	phone: '9008430320'
// });
// l.save();
// console.log(l);
module.exports = Leave;
