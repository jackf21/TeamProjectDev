// CLIENT SIDE JS

window.onload = () => {
    const button = document.getElementById("registerButton");

    button.addEventListener('click', async (event) => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;

        if (!checkUsername(username) || !checkPassword(password, password2)) {
            alert("Invalid username or password.\nYour username must be between 3 and 16 characters.\nYour password must contain at least an uppercase and lowercase letter, a number, and a special character.");
            return;
        }

        const data = { username, password };

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