window.onload = () => {
    const button = document.getElementById("loginButton");

    // user stays logged in even after a refresh
    updateUserInformation();

    button.addEventListener('click', async (event) => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Checks if password is valid using regex before checking the database for it
        // This is to prevent unecessary database queries 
        if (!checkPassword(password)) {
            alert("Invalid username or password.");
            return;
        }

        const result = await getData();

        if (result) {
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

            updateUserInformation();
        }
        else {
            alert("Invalid username or password.");
        }

        // force reloads the window AFTER our functions have completed
        window.location.reload();
    });
}

// updates user information on the page, determines whether they are logged in or not
const updateUserInformation = () => {
    fetch('/user')
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            document.getElementById('loggedInMessage').textContent = 'You are logged in as: ' + data.username;
        } else {
            document.getElementById('loggedInMessage').textContent = 'You are not logged in.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Password regex is the same as used in the register behaviour
const checkPassword = (pw, pw2) => {
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}$/;

    if (!regex.test(pw) || pw === null || pw2 === null) {
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
// Returns true if entry has been found in database
const checkData = (data) => {
    for(const element of data) {
        if (element.username === document.getElementById("username").value && element.password === document.getElementById("password").value) {
            return true;
        }
    }
    return false;
}