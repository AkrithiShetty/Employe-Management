const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {
	empID: {
		type: String
	},
	empName: {
		type: String,
		trim: true,
		required: true
	},
	jobDescription: {
		type: String,
		trim: true
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
	phoneNo: {
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
	}
});

module.exports = Employee;

// const emp = new Employee({
// 	empName: 'Akrithi',
// 	jobDescription: 'MD',
// 	email: 'shetty@gmail.com',
// 	phoneNo: '1234556789'
// });
// emp
// 	.save()
// 	.then(() => {
// 		console.log(emp);
// 	})
// 	.catch((e) => console.log(e));
