# Team Project

Website that will help students with study materials, advice, and more.

In order to run this you will need to install express & nedb using node package manager
https://nodejs.org/en/download
```
npm install express
npm install express-session
npm install nedb
```

You will also have to create your own ``config.json`` file with a sessionSecret id so that Login sessions are saved.  
  
Example:  
  
```json
{
    "sessionSecret": "<random-string>"
}
```
