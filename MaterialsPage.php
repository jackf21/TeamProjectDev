<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyStudy - Materials</title>
    <link rel="stylesheet" href="css/MaterialsStyle.css">
</head>

<body>
    <header id="banner">
        <img src="images/logo.png" alt="MyStudy Logo" id="mainLogo"/>
        <ul class="bannerList">
            <a href="MainPage.php"><li class="bannerListItem"><strong>Home</strong></li></a> 
            <a href="StudyAdvicePage.php"><li class="bannerListItem"><strong>Study Advice</strong></li></a> 
            <a href="MaterialsPage.php"><li class="bannerListItem"><strong>Materials</strong></li></a> 
        </ul>
        <div>
            <a href="LoginPage.php"><button class="bannerListItem" id="logSignButton">Login</button></a>
        </div>
    </header>

    <h id=mainTitle>Materials</h>

    <div id="materials">
        <div class="list">
            <h1>AIs</h1>
                <ul class="materialsLists">
                    <a href="https://chat.openai.com/"><li class="materialsItem" class="filter any">ChatGPT</li></a>
                    <a href="https://www.codium.ai/"><li class="materialsItem" class="filter any">Codeium</li></a>
                    <li class="materialsItem" class="filter any">BingAI</li>
                    <a href="https://copilot.microsoft.com/"><li class="materialsItem" class="filter any">Copilot</li></a>
                </ul>
        </div>

        <div class="list">
            <h1>Books</h1>
                <ul class="materialsLists">
                    <li class="materialsItem" class="filter webDev"><input type="checkbox" value="true">Don't make me think - Steve Krug</li>
                    <li class="materialsItem" class="filter webDev"><input type="checkbox" value="true">Smashing Mobile Web Development - Greg Avola</li>
                    <li class="materialsItem" class="filter database"><input type="checkbox" value="true">MySQL Crash Course: A Hands-on Introduction to Database Development - Rick Silva</li>
                    <li class="materialsItem" class="filter database"><input type="checkbox" value="true">Database Systems: The Complete Book - Hector Garcia-Molina, Jeffrey D. Ullman, and Jennifer Widom</li>
                    <li class="materialsItem" class="filter database"><input type="checkbox" value="true">Database Design for Mere Mortals - Michael J. Hernandez</li>
                    <li class="materialsItem" class="filter maths"><input type="checkbox" value="true">O'Reilly's Introduction to Discrete Mathematics</li>
                    <li class="materialsItem" class="filter maths"><input type="checkbox" value="true">A Concise Introduction to Pure Mathematics - M. Liebeck</li>
                    <li class="materialsItem" class="filter maths"><input type="checkbox" value="true">Guide to Analysis - M. Hart and D. Towers</li>
                    <li class="materialsItem" class="filter programming"><input type="checkbox" value="true">The Pragmatic Programmer - Andrew Hunt and David Thomas</li>
                    <li class="materialsItem" class="filter programming"><input type="checkbox" value="true">Head First Java - Kathy Sierra & Bert Bates</li>
                    <li class="materialsItem" class="filter groupProject"><input type="checkbox" value="true">Software Development Pearls: Lessons from Fifty Years of Software Experience, 1st edition</li>
                </ul>
        </div>

        <div class="list">
            <h1>Websites</h1>
                <ul class="materialsLists">
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                </ul>
        </div>

        <div class="list">
            <h1>YouTube</h1>
                <ul class="materialsLists">
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                    <li class="materialsItem" class="filter "><input type="checkbox" value="true"></li>
                </ul>
        </div>
    </div>

    <footer>
        <ul class="footerList" id="footerList1">
            <li><strong>Developed by:</strong></li>
            <li>Noah, Jack,</li>
            <li>Hayden, Jackson,</li>
            <li>Aron, Reyan</li>
        </ul>
        <ul class="footerList" id="footerList2">
            <li>Developed as a Team Project for Manchester Metropolitan University</li>
            <li>Consider donating to our page <a href="https://youtu.be/eEjGgFKX_aU?si=VTNYLea1w91mt7vC" class="pageLink">here.</a></li>
            <br />
            <li>Project Page: <a href="https://github.com/jackf21/TeamProjectDev" class="pageLink">github.com/jackf21/TeamProjectDev</a></li>
        </ul>
        <div></div>
    </footer>

</body>
</html>