<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyStudy - Materials</title>
    <link rel="stylesheet" href="css/MaterialsStyle.css">
    <script src="includes/MaterialsPage.js"></script>
</head>

<body>
    <header id="banner">
        <img src="images/logo.png" alt="MyStudy Logo" id="mainLogo"/>
        <ul class="bannerList">
            <a href="MainPage.html"><li class="bannerListItem"><strong>Home</strong></li></a> 
            <a href="A&R.html"><li class="bannerListItem"><strong>Study Advice</strong></li></a> 
            <a href="H&J.html"><li class="bannerListItem"><strong>Materials</strong></li></a> 
        </ul>
        <div>
            <a href="LoginPage.html"><button class="bannerListItem" id="logSignButton">Login</button></a>
        </div>
    </header>

    <h id=mainTitle>Materials</h>

    <div id="filterLine">
        <label for="filters">Subjects:</label>
        <select onchange="filterMaterials(value)" name="filters" id="subjects">
            <option value="any">Any</option>
            <option value="database">Database</option>
            <option value="maths">Mathematics</option>
            <option value="programming">Programming</option>
            <option value="webDev">Web Development</option>
        </select>

        <label for="completed">Status:</label>
        <select name="filters" id="completed">
            <option value="any">Any</option>
            <option value="finished">Finished</option>
            <option value="unfinished">Unfinished</option>
        </select>
    </div>

    <div id="materials">
        <div class="list">
            <h1>AIs</h1>
                <ul class="materialsLists">
                    <a href="https://chat.openai.com/"><li class="materialsItem">ChatGPT</li></a>
                    <a href="https://www.codium.ai/"><li class="materialsItem">Codeium</li></a>
                    <li class="materialsItem">BingAI</li>
                    <a href="https://copilot.microsoft.com/"><li class="materialsItem">Copilot</li></a>
                </ul>
        </div>

        <div class="list">
            <h1>Books</h1>
                <ul class="materialsLists">
                    <li class="materialsItem filter webDev"><input type="checkbox" value="true">Don't make me think - Steve Krug</li>
                    <li class="materialsItem filter webDev"><input type="checkbox" value="true">Smashing Mobile Web Development - Greg Avola</li>
                    <li class="materialsItem filter database"><input type="checkbox" value="true">MySQL Crash Course: A Hands-on Introduction to Database Development - Rick Silva</li>
                    <li class="materialsItem filter database"><input type="checkbox" value="true">Database Systems: The Complete Book - Hector Garcia-Molina, Jeffrey D. Ullman, and Jennifer Widom</li>
                    <li class="materialsItem filter database"><input type="checkbox" value="true">Database Design for Mere Mortals - Michael J. Hernandez</li>
                    <li class="materialsItem filter maths"><input type="checkbox" value="true">O'Reilly's Introduction to Discrete Mathematics</li>
                    <li class="materialsItem filter maths"><input type="checkbox" value="true">A Concise Introduction to Pure Mathematics - M. Liebeck</li>
                    <li class="materialsItem filter maths"><input type="checkbox" value="true">Guide to Analysis - M. Hart and D. Towers</li>
                    <li class="materialsItem filter programming"><input type="checkbox" value="true">The Pragmatic Programmer - Andrew Hunt and David Thomas</li>
                    <li class="materialsItem filter programming"><input type="checkbox" value="true">Head First Java - Kathy Sierra & Bert Bates</li>
                    <li class="materialsItem filter groupProject"><input type="checkbox" value="true">Software Development Pearls: Lessons from Fifty Years of Software Experience, 1st edition</li>
                </ul>
        </div>

        <div class="list">
            <h1>Websites</h1>
                <ul class="materialsLists">
                    <a href="https://www.w3schools.com/"></a><li class="materialsItem filter programming"><input type="checkbox" value="true">W3Schools</li>
                    <a href="https://stackoverflow.com/"></a><li class="materialsItem filter programming"><input type="checkbox" value="true">Stack Overflow</li>
                    <a href="https://leetcode.com/"></a><li class="materialsItem filter programming"><input type="checkbox" value="true">Leetcode</li>
                    <a href="https://www.hackerrank.com/"></a><li class="materialsItem filter programming"><input type="checkbox" value="true">Hackerrank</li>
                    <a href="https://www.cs.ox.ac.uk/geomlab/"></a><li class="materialsItem filter programming"><input type="checkbox" value="true">GeomLab website</li>
                </ul>
        </div>

        <div class="list">
            <h1>YouTube</h1>
                <ul class="materialsLists">
                    <a href=""></a><li class="materialsItem filter "><input type="checkbox" value="true"></li>
                    <a href=""></a><li class="materialsItem filter "><input type="checkbox" value="true"></li>
                    <a href=""></a><li class="materialsItem filter "><input type="checkbox" value="true"></li>
                    <a href=""></a><li class="materialsItem filter "><input type="checkbox" value="true"></li>
                    <a href=""></a><li class="materialsItem filter "><input type="checkbox" value="true"></li>
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