<!DOCTYPE html>

<html>

<head>

    <title>Canvas</title>
    <link rel = "stylesheet" type = "text/css" href = "CSS/style.css"/>
    <meta charset = 'UTF-8'/>

</head>

<body>

    <section id = 'mainpage'>
        

        <canvas id = "canvas"></canvas>

    </section>

    <section id = 'settings'>

        <form method = 'POST' onSubmit = 'return false'>
            
            <div class = "groupes">
                
                <label for = 'vitesseX'>Vélocité en X : (min : -30 max : 30 default : 15)</label>
                <input id = 'vitesseX' type = 'number' step = '1' min = "-30" max = "30" value = "15"/> 
            
            </div>
            
            <div class = "groupes">
                
                <label for = 'vitesseY'>Vélocité en Y : (min : -30 max : 30 default : 15)</label>
                <input id = 'vitesseY' type = 'number' step = '1' min = "-30" max = "30" value = "15"/> 
            
            </div>

            <div class = "groupes">
                
                <label for = 'gravity'>Gravité : (min : 0.1 max : 0.9 default : 0.8)</label>
                <input id = 'gravity' type = 'number' step = '0.1' min = "0" max = "1" value = "0.8"/> 
            
            </div>

            <div class = "groupes">
                
                <label for = 'taille'>Rayon de la balle : (min : 1 max : 30 default : 20)</label>
                <input id = 'taille' type = 'number' step = '1' min = "1" max = "30" value = "20"/> 
            
            </div>

        </form>

    </section>
    
    <script type = "text/javascript" src = 'JS/script.js'></script>

</body>

</html>