const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
app.get('/', function(req, res) {
	res.send('Hello world');
});

app.get('/about', (req, res) => {
	res.send('<h1>About</h1>');
});

app.get('/users/:name', (req, res) => {
	let user = req.params.name;
	res.send('<h1>'+user+'</h1>');
});
*/

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Service JSON Data
app.get('/users', (req, res) => {
	let users = [
		{
			first_name: "John",
			last_name: "Doe",
			age: 34,
			gender: "male"
		},
		{
			first_name: "Tom",
			last_name: "Jackson",
			age: 23,
			gender: "male"
		}
	];

	res.json(users);
});

// Service Fild Download
app.get('/download', (req, res) => {
	res.download(path.join(__dirname, '/downloads/pdf.pdf'));
});

// Redirect
app.get('/about', (req, res) => {
	res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
	let name = req.body.name;
	let email = req.body.email;

	console.log(name + 'has subscribed with ' + email);
});

app.listen(3000, () => {
	console.log('Server started on port 3000...');
});




