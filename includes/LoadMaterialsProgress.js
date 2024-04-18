window.addEventListener('load', () => {
    LoadProgress();

    const button = document.getElementById("saveProgress");

    button.addEventListener("click", async () => {
        await SaveProgress();
    })

})

async function LoadProgress() {
    
    await fetch('/user')
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {

            console.log("Username: " + data.username);
            console.log("Obj: " + data.savedBooksProgress);
            console.log("Single obj: " + data.savedBooksProgress[0]);

            for(let i = 0; i < data.savedBooksProgress.length; i++){
                document.getElementById("Books").getElementsByTagName("li")[i].checked = data.savedBooksProgress[i];
            }

            for(let i = 0; i < data.savedYouTubeProgress.length; i++){
                document.getElementById("YouTube").getElementsByTagName("li")[i].checked = data.savedYouTubeProgress[i];
            }
        }
        else {
            console.log("Not logged in");
            return;
        }
        
    })
    .catch((err) => {
        console.log(err);
    })

    await fetch('/api')
    

    console.log("Progress loaded");
}

//Saving user selection of checkboxes
async function SaveProgress() {
    let savedBooksProgress = document.getElementById("Books").getElementsByTagName("li");
    let savedYouTubeProgress = document.getElementById("YouTube").getElementsByTagName("li");

    let username;

    await fetch('/user')
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

    const data = { username, savedBooksProgress, savedYouTubeProgress };

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