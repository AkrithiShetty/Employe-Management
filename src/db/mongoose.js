const mongoose = require('mongoose');

mongoose
	.connect('mongodb://127.0.0.1:27017/Employee-Management', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then((success) => {
		console.log('Database Connection Successful!!');
	})
	.catch((error) => {
		console.log('Database Connection Failed!!', error);
	});
