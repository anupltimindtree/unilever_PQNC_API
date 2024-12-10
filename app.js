require('dotenv').config();
const express       = require("express");
const cors          = require("cors");
const cookieParser  = require("cookie-parser");
const bodyParser    = require("body-parser");

const sequelize     = require('./src/backend-service/utils/database'); 
const User          = require('./src/backend-service/models/user');
var indexRouter     = require('./src/backend-service/routes/internal-user-routes.js');
 
const app           = express(); 

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }));


app.use('/api', indexRouter);
	
// Sync all models that are not 
// already in the database 
sequelize.dbSequelize.sync() 


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 

module.exports = app;