require('dotenv').config();
const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT;
const navigation_routes = require('./routes/navigation');
const mongoose = require('mongoose');

const db = process.env.MONGODB_URI;

app.set('view engine', 'ejs');

app.use(ejsLayouts);

app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(navigation_routes);

mongoose
	.connect(
		db,
		{ useNewUrlParser: true },
	)
	.then(() => {
		console.log('MongoDB Connected');
	})
	.catch((err) => {
		return console.log(err);
	});

console.log(mongoose.version);
app.locals.mong = mongoose;
app.listen(port, () => {
	// eslint-disable-next-line no-console
	return console.log(`Example app listening on port ${port}!`);
});
