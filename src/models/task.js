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
	taskName: {
		type: String,
		trim: true,
		required: true
	},
	status: {
		type: Number,
		trim: true
	}
});

module.exports = Task;
