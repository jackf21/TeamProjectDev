// SERVER SIDE JS

// Express api allows us to connect to the database hosted locally
const express = require('express');
// NeDB supports the hosting of our database locally
const Datastore = require('nedb');
const app = express();

// Use express and listen on port 3000 for a connection
app.listen(3000, () => console.log("Listening for a connection on Port 3000..."));

// Allows express to see the root directory to run the html (it automatically goes to index.html)
app.use(express.static('.'));

// Allows express to parse json values properly
// Limits all client data sent to 1mb MAX
app.use(express.json({limit: '1mb' }));

const database = new Datastore('includes/database.db');
// load existing data into memory
database.loadDatabase();

/* POST method route 
Takes in address where the post is received
As well as a callback function to look at information in and send response out
"request" contains all of the data specified in the method route
"response" is what is returned to the client
*/
app.post('/api', (request, response) => {
    console.log("Server request received.");

    database.insert(request.body);

    // response is required to do something after the request
    response.json({
        status: "Success",
        username: request.body.username,
        password: request.body.password
    });
});