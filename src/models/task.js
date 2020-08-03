const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
	taskName: {
		type: String,
		trim: true,
		required: true
	},
	status: {
		type: String,
		trim: true,
		required: true
	}
});

module.exports = Task;
