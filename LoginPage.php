<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyStudy - Login</title>
    <link rel="stylesheet" href="css/LoginPageStyle.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
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

    <div class="container">
        <div class="wrapper">
            <form action="">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required>
                    <i class='bx bxs-lock-alt' ></i>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox"> Remember me</label>
                </div>

                <button type="submit" class="btn">Login</button>

                <div class="register-link">
                    <p>Don't have an account? <a href="RegisterPage.php">Register</a></p>
                </div>
            </form>
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