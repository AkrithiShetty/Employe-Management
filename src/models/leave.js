const mongoose = require('mongoose');

const Leave = mongoose.model('Leave', {
	toDate: {
		type: Date,
		trim: true,
		required: true
	},
	fromDate: {
		type: Date,
		trim: true,
		required: true
	},
	reason: {
		type: String,
		required: true,
		trim: true
	}
});

module.exports = Leave;
