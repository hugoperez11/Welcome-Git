 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <header>
        <img src="./img/pac-man-logo.png" alt="">
        <img src="./img/pac-man-logo-png-transparent.png" alt="">
        <div id="score-board">0000</div>
    </header>

    <div class="center">
        <div class="comecocos">
            <img src="img/pacman.webp">
        </div>
    </div>

    <audio src="sound/Pacman-Game-Start-Sound.mp3" autoplay>
    </audio>
    <script src="app.js"></script>
</body>

</html>

*{
    margin: 0;
    padding: 0;
}

body{
    background-color: black;
    background-image: url("./../img/fondo-pacman.jpg");
    background-repeat: repeat;
    
}

img{
    width: 100px;
    height: 100px; 
}

.center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#score-board {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}
.comecocos img {
    transition: transform 1s ease;
    position: absolute;
}
.fantasma, .cherry {
    position: absolute;
}
