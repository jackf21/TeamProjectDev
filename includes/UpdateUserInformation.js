// attempt to login user if theyre logged in within the session
window.onload = () => {
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