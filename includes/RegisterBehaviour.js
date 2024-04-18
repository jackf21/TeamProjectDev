// CLIENT SIDE JS

window.onload = () => {
    const button = document.getElementById("registerButton");

    button.addEventListener('click', async (event) => {
        // prevent default event behaviour (refreshing page on submit)
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        //boolean array for checkbox statuses
        const savedBooksProgress = new Array(11).fill(false);
        const savedYouTubeProgress = new Array(5).fill(false);

        if (!checkUsername(username) || !checkPassword(password, password2)) {
            alert("Invalid username or password.\nYour username must be between 3 and 16 characters.\nYour password must contain at least an uppercase and lowercase letter, a number, and a special character.");
            return;
        }

        const result = await getData();

        if (!result) {
            alert("Username already registered");
            return;
        }
        else {
            alert("Welcome " + username);
            console.log("Logged in successfully")

            const data = { username, password };
            const options = {
                // defines the method that we use when querying
                method: 'POST',
                // defines the type of data being sent (JSON format)
                headers: { 'Content-Type': 'application/json'},
                // defines the data itself - string in JSON format
                body: JSON.stringify(data)
            };

            const response = await fetch('/login', options);
        }

        const data = { username, password, savedBooksProgress, savedYouTubeProgress };

        // needs to send a POST request to the server to add data there
        const options = {
            // defines the method that we use when querying
            method: 'POST',
            // defines the type of data being sent (JSON format)
            headers: { 'Content-Type': 'application/json'},
            // defines the data itself - string in JSON format
            body: JSON.stringify(data)
        };

        // waits for the fetch to execute to receive a response from the server
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);

        // force reloads the window AFTER our functions have completed
        window.location.reload();
    });
}

// REGEX VALIDITY CHECKS FOR USERNAME AND PASSWORD
const checkUsername = (username) => {
    let regex = /^[A-Za-z0-9]{3,16}$/;

    if (!regex.test(username) || username === null) {
        return false;
    }
    return true;
}

const checkPassword = (pw, pw2) => {
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}$/;

    if (!regex.test(pw) || pw === null || pw2 === null || pw !== pw2) {
        return false;
    }
    return true;
}

// Grabs all data from the database
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    console.log(checkData(data));
    return checkData(data);
}

// For each piece of data, check whether the username is already registered
// Returns false if entry has been found in database
const checkData = (data) => {
    for(const element of data) {
        if (element.username === document.getElementById("username").value) {
            return false;
        }
    }
    return true;
}