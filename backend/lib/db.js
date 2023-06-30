//Set up mongoose connection
const mongoose = require("mongoose");

require("dotenv").config();

let database_url = process.env.DB_URL;

// Connecting to the database
mongoose
	.connect(database_url, {
		keepAlive: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now...", err);
		process.exit();
	});

// const mongoose = require('mongoose')

// mongoose.connect("mongodb+srv://api_client:metaverse-client@metaverseapi.ehc3j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
//     .then(() => console.log('mongodb running on 27017'))
//     .catch(err => console.log(err));

	

module.exports = mongoose.connection;