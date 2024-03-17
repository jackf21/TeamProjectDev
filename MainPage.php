<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyStudy - Main Page</title>
    <link rel="stylesheet" href="./css//MainStyle.css">
    <script src="includes/MainPageBehaviour.js"></script>
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

    <h id=mainTitle><strong><u>MyStudy</u></strong></h>
    <div id="contentContainer">
        <div id="mainContentContainer">
            <p class="content" id="contentTop">
                MyStudy is a project developed by students, for students, with the goal of allowing ease of access to useful resources. We aim to give all students the chance to use these for studying as well as giving advice on how to 
                get into good studying habits. We know more than anyone the pressure of having to study for exams, having to crunch coursework to meet a deadline thats closing in and just the general stress of 
                University - that's why we set up this website in order to help in learning the techniques and getting access to useful resources required to study efficiently. This website 
                is intended for use by Computer Science students, but can be used by anyone struggling with studying - anyone in any part of their Uni Journey will benefit from our page.
                <br><br>
                We want you to feel good about studying - thats why we created our Progress Tracker, showing you both the resources you have yet to use and the progress 
                you have made. You should use this to keep track of what materials you have used in order to diversify your learning. This is to expand the breadth of your understanding of 
                a given topic. You can also track which techniques you have used when studying to help find the study methods that work for you.
            </p>
            <div class="content" id="contentBottom"> <!--Needs Filling In with tips for the website try to write enough to fill in two lines-->
                <p id="title">Tips For Using The Website!</p>
                <ul id="tipList">
                    <li>Creating an account will let you track your study progress by clicking the checkboxes next to the materials and advice</li><br>
                    <li>Use the navigation bars at the top to move between pages</li><br>
                    <li>The materials arent listed in order so feel free to check out any of them at any time; Whatever works for you!</li><br>
                    <li>Not all of the advice will be good to for you specifically, try to identify what kind of learner you are to pick out the advice that is best for you</li><br>
                    <li>
                        We've curated a selection of articles that we consider to be extremely helpful in your studying, take the time to read all of them, 
                        they are featured on the righthand side
                    </li>
                </ul>
            </div>
        </div>
    
        <div class="content" id="rightContent">
            <strong id="rightContentTitle"><u>Useful Articles</u></strong>


            <a href="https://youtu.be/eEjGgFKX_aU?si=VTNYLea1w91mt7vC">
                <div class="Article">
                    <img src="images/doodler.jpg" alt="placeholder" class="ArticleImage">
                    <span>Title</span>
                </div>
            </a>

            <a href="https://youtu.be/eEjGgFKX_aU?si=VTNYLea1w91mt7vC">
                <div class="Article">
                    <img src="images/doodler.jpg" alt="placeholder" class="ArticleImage">
                    <span>Title</span>
                </div>
            </a>

            <a href="https://youtu.be/eEjGgFKX_aU?si=VTNYLea1w91mt7vC">
                <div class="Article">
                    <img src="images/doodler.jpg" alt="placeholder" class="ArticleImage">
                    <span>Title</span>
                </div>
            </a>

            
            <div>
                <input type="radio" name="contentScroll" value="1" id = "radioStart">
                <input type="radio" name="contentScroll" value="2">
                <input type="radio" name="contentScroll" value="3">
            </div>
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