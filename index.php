<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avania | Accueil</title>
    <link rel="icon" href="assets/img/logo_small_icon_only_inverted.png">
    <link rel="stylesheet" href="assets/css/index.css">
    <script src="https://kit.fontawesome.com/3134cfd3e0.js" crossorigin="anonymous"></script>
</head>
<body>

    <header id="header">

        <nav id="fixed">

            <button id="menu" onclick="swapMenu(true);"><i class="fas fa-bars"></i></button>
            <button id="leave-menu" onclick="swapMenu(false);"><i class="fas fa-times"></i></button>

            <div id="dropdown">

                <span class="utils">

                    <a href="index.php" class="home"><i class="fas fa-home"></i>  Accueil</a>

                    <a href="#" class="status"><i class="fas fa-chart-bar"></i>  Status</a>

                    <a href="#" class="news"><i class="fas fa-plus"></i>  Actualités</a>

                    <a href="#" class="forum"><i class="fas fa-comments"></i>  Forum</a>

                    <a href="#" class="contact"><i class="fas fa-search"></i>  Contact</a>

                </span>

                <div class="bar"></div>

                <span class="account">

                    <a href="#">Inscription</a>
                    <a href="#">Connexion</a>

                </span>

            </div>

            <img class="hlogo" src="assets/img/horizontal_logo_large.png" alt="Logo horizontal du site web">

            <button id="enable-dark" onclick="dark(true);"><i class="far fa-moon"></i></button>
            <button id="disable-dark" onclick="dark(false);"><i class="far fa-sun"></i></button>

        </nav>

        <p class="welcome">Bienvenue<br>dans le futur<br>minecraftien.</p>

    </header>

    <a class="discover" href="#presentation">Nous découvrir</a>

    <script src="assets/js/index.js"></script>

</body>
</html>