const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo', err);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo', err);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo', err);
  // });

  // db.collection('Users').deleteMany({name: 'Brandon'}).then((result) => {
  //   console.log(result);
  // }, err => {
  //   console.log('Unable to delete users', err);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b6023cfff675f2afcdafde5')}).then(result => {
    console.log(result);
  }, err => {
    console.log('Unable to delete user', err);
  })

	client.close();
});
