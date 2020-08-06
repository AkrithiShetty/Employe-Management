const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
	taskId: {
		type: String,
		trim: true,
		required: true
	},
	empId: {
		type: String,
		trim: true,
		required: true
	},
	name: {
		type: String,
		trim: true,
		required: true
	},
	taskName: {
		type: String,
		trim: true,
		required: true
	},
	status: {
		type: Number,

		trim: true,
		validate(value) {
			if (value > 100) {
				throw new Error('Status cannot be greater than 100');
			}
		}
	}
});

module.exports = Task;
