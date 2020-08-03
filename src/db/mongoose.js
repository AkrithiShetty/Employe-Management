const mongoose = require('mongoose');

mongoose.connect(
	'mongodb://127.0.0.1:27017/Employee-Management',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	},
	(error) => {
		if (error) {
			return console.log('Database Connection Failed!!', error);
		}
		console.log('Database Connection Successful!!');
	}
);
