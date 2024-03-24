window.onload = () => {
    const button = document.getElementById("loginButton");

    button.addEventListener('click', async (event) => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!checkPassword(password)) {
            alert("Invalid username or password.");
            return;
        }

        const result = await getData();

        if (result) {
            alert("Welcome " + username);
            console.log("Logged in successfully")
            return;
        }
    });
}

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
        if (element.username === document.getElementById("username").value && element.password === document.getElementById("password")) {
            return true;
        }
    }
    return false;
}