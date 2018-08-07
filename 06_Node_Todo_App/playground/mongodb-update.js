const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  // 	_id: new ObjectID('5b602f5f72dc49c27a37ca41')
  // },
  // {
  // 	$set: {
  // 		completed: true
  // 	}
  // }, {
  // 	returnOriginal: false
  // }).then((result) => {
  // 	console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Jake'
  },
	{
			$set: {
				name: 'Brandon'
			},
			$inc: {
				age: 1
			}
	},
	{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

  client.close();
});
