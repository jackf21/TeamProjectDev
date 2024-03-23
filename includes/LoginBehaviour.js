window.onload = () => {
    const button = document.getElementById("loginButton");

    button.addEventListener('click', async (event) => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

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