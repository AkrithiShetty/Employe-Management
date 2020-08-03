function redirect() {
	const val = document.getElementById('myButton');
	if (val === 'employee') {
		const url = 'http://localhost:3000/employee';
		window.location(url);
	} else {
		const url = 'http://localhost:3000/manager';
		window.location(url);
	}
}
