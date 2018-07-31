const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req, res) => {
	res.status(200).send([
	{
		name: 'User one',
		age: 24
	},
	{
		name: 'Brandon Kirk',
		age: 18
	},
	{
		name: 'User two',
		age: 30
	}]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports.app = app;