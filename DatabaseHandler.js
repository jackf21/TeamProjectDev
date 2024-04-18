// SERVER SIDE JS

// Express api allows us to connect to the database hosted locally
const express = require('express');
// Saves the session locally
const session = require('express-session');
// NeDB supports the hosting of our database locally
const Datastore = require('nedb');
const app = express();

const { sessionSecret } = require("./config.json")

// Use express and listen on port 3000 for a connection
app.listen(3000, () => console.log("Listening for a connection on Port 3000..."));

// Allows express to see the root directory to run the html (it automatically goes to index.html)
app.use(express.static('.'));

// Allows express to parse json values properly
// Limits all client data sent to 1mb MAX
app.use(express.json({limit: '1mb' }));

// Saves session
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false
}));

const database = new Datastore('includes/database.db');
// load existing data into memory
database.loadDatabase();

// endpoint to get user information
app.get('/user', (request, response) => {
    if (request.session.user) {
        response.json({
            loggedIn: true, 
            username: request.session.user.username, 
            savedBooksProgress: request.session.user.savedBooksProgress, 
            savedYouTubeProgress: request.session.user.savedYouTubeProgress 
        });
    } else {
        response.json({ loggedIn: false });
    }
});

// Login route
app.post('/login', (request, response) => {
    database.findOne({ username: request.body.username }, (err, user) => {
        if (err) {
            console.error("Error:", err);
            return response.status(500).json({ error: 'Error occurred during login' });
        }
        if (user) {
            request.session.user = { // save user and information within the session
                username: user.username,
                savedBooksProgress: user.savedBooksProgress,
                savedYouTubeProgress: user.savedYouTubeProgress
            }
            response.json({ success: true, message: 'Logged in successfully' });
        } else {
            response.status(401).json({ error: 'Invalid username or password' });
        }
    });
});

app.post('')

//Database query, modifying the find({}) will return different data 
app.get('/api',(request, response) => {
    database.find({}, (err,data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

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

app.patch('/api', (request, response) => {
    console.log("Data updated");
    database.update(
        { username: request.body.username },
        {
            $set: {
                savedBooksProgress: request.body.savedBooksProgress,
                savedYouTubeProgress: request.body.savedYouTubeProgress
            }
        },
        {},
        (err, numReplaced) => {
            if (err) {
                console.error(err);
                response.status(500).json({ error: "Error updating data" });
            } else {
                console.log(`Updated ${numReplaced} document(s)`);
                response.status(200).json({ message: "Data updated successfully" });
            }
        }
    );

    // removes duplicate values in DB (update alone appends and doesnt remove)
    database.persistence.compactDatafile();
});