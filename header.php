<!DOCTYPE html>
<html lang="en">
<head>
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- jQuery -->
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
    </script>

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/cf529eda0d.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
   

    <title><?php echo $pageName?></title>
</head>
<body>
    <!-- PRELOADER -->
    <div id="loader-wrapper">
        <div class="spinner-3"></div>
    </div>
    <div class="loader-space"></div>
    <!-- SCROLL INDICATOR-->
    <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
    </div> 

    <!-- SLIDEOUT MENU -->
            <div id="slideout-menu">
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">O nas</a></li>
                    <li><a href="services.php">Usługi</a></li>
                    <li><a onclick="scrollGallery()" id="gallery">Realizacje</a></li>
                    <li><a>Referencje</a></li>
                    <li><a onclick="scrollCareer()">Kariera</a></li>
                    <li><a onclick="scrollContact()">Kontakt</a></li>
                </ul>
            </div>

    <!-- NAVIGATION -->
    <header id="header">
            <div class="logo"></div> 
            <nav>
            <div id="menu-icon">
                <i class="fas fa-bars"></i>
            </div>
                <ul>
                    <li><a href="index.php" id="homepage">Home</a></li>
                    <li><a href="about.php">O nas</a></li>
                    <li><a href="services.php">Usługi</a></li>
                    <li><a onclick="scrollGallery()" id="gallery">Realizacje</a></li>
                    <li><a href="services.php">Referencje</a></li>
                    <li><a onclick="scrollCareer()">Kariera</a></li>
                    <li><a onclick="scrollContact()">Kontakt</a></li>
                </ul>
            </nav>
    </header>