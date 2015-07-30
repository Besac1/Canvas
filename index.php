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
                
                <label for = 'vitesseXInput'>Vélocité en X (min : -30 max : 30 default : 15) :</label>
                <input id = 'vitesseXInput' type = 'number' step = '1' min = "-30" max = "30" value = "15"/> 
            
            </div>
            
            <div class = "groupes">
                
                <label for = 'vitesseYInput'>Vélocité en Y (min : -30 max : 30 default : 15) :</label>
                <input id = 'vitesseYInput' type = 'number' step = '1' min = "-30" max = "30" value = "15"/> 
            
            </div>

            <div class = "groupes">
                
                <label for = 'gravityInput'>Gravité (min  0.1 max : 0.9 default : 0.8) :</label>
                <input id = 'gravityInput' type = 'number' step = '0.1' min = "0" max = "1" value = "0.8"/> 
            
            </div>

            <div class = "groupes">
                
                <label for = 'tailleInput'>Rayon de la balle (min : 1 max : 30 default : 20) :</label>
                <input id = 'tailleInput' type = 'number' step = '1' min = "1" max = "30" value = "20"/> 
            
            </div>

            <div class = "groupes">
                
                <label for = 'largeurInput'>Largeur du canvas (min : 1 max : 2.5 default : 1.1) :</label>
                <input id = 'largeurInput' type = 'range' step = '0.01' min = "1" max = "2.5" value = "1.1"/> 
            
            </div>

        </form>

    </section>
    
    <script type = "text/javascript" src = 'JS/script.js'></script>

</body>

</html>