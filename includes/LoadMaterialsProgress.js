window.addEventListener('load', () => {
    LoadProgress
})

async function LoadProgress() {
    fetch('/user')
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {

        }
    })
}

//Saving user selection of checkboxes
async function SaveProgress() {
    let savedAIProgress = document.getElementById("AIs").getElementsByTagName("li");
    let savedBooksProgress = document.getElementById("Books").getElementsByTagName("li");
    let savedWebsitesProgress = document.getElementById("Websites").getElementsByTagName("li");
    let savedYouTubeProgress = document.getElementById("YouTube").getElementsByTagName("li");

    let username;

    fetch('/user')
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            username = data.username;
        }
        else{
            console.log("Failed to fetch username");
            return;
        }
    })

    const data = { username, savedAIProgress, savedBooksProgress, savedWebsitesProgress, savedYouTubeProgress };

        // needs to send a POST request to the server to add data there
        const options = {
            // defines the method that we use when querying
            method: 'PATCH',
            // defines the type of data being sent (JSON format)
            headers: { 'Content-Type': 'application/json'},
            // defines the data itself - string in JSON format
            body: JSON.stringify(data)
        };

        // waits for the fetch to execute to receive a response from the server
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
}