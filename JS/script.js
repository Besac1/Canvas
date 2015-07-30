document.addEventListener('DOMContentLoaded', function () {

    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        largeurCanvas = canvas.width = window.innerWidth/1.01,
        hauteurCanvas = canvas.height = window.innerHeight/1.5,
        vitesseX = 15,
        vitesseY = 15,
        gravity = 1,
        rebond = 0.8,
        frottements = 0.985,
        form = document.querySelector('form'),
        largeurInput = document.getElementById('largeurInput');

    largeurInput.addEventListener('input', function () {

        var i = largeurInput.value;

        if (i >= 1 && i <= 2.5) {

            largeurCanvas = canvas.width = window.innerWidth/i;

        }

    });

    form.addEventListener('keydown', function (e) {

        if (e.keyCode === 13) {

            var vitesseXInput = parseInt(document.getElementById('vitesseXInput').value),   
                vitesseYInput = parseInt(document.getElementById('vitesseYInput').value),
                tailleInput = parseInt(document.getElementById('tailleInput').value),
                gravityInput = parseFloat(document.getElementById('gravityInput').value);

            if (vitesseXInput >= -30 && vitesseXInput <= 30) {
            
                vitesseX = vitesseXInput;

            }

            if (vitesseYInput >= -30 && vitesseYInput <= 30) {

                vitesseY = vitesseYInput;

            }

            if (gravityInput > 0 && gravityInput < 1) {

                gravity = gravityInput;

            } 

            if (tailleInput > 0 && tailleInput <= 30) {

                balle.rayon = tailleInput;

            }

        }

    });

    function Balle () {

        this.rayon = 20;
        this.x = canvas.width / 2;
        this.y = canvas.height - this.rayon - 200;

        this.dessiner = function (context) {

            context.fillStyle = 'black';
            context.beginPath();
            context.arc(this.x, this.y, this.rayon, 0, Math.PI*2, false);
            context.closePath();
            context.fill();
        }

    }

    var balle = new Balle();
    
    (function renderFrame () {

        requestAnimationFrame(renderFrame);
        context.clearRect(0, 0, largeurCanvas, hauteurCanvas);
     
        vitesseY += gravity;

        balle.x += vitesseX;
        balle.y += vitesseY;
     
        balle.dessiner(context);

        if (balle.y + balle.rayon > canvas.height) 
        {

            balle.y = canvas.height - balle.rayon;
            vitesseY *= - rebond;

        }  

        if (balle.x + balle.rayon > canvas.width) {

            balle.x = canvas.width - balle.rayon;
            vitesseX *= - rebond;

        }  

        if (balle.x - balle.rayon <= 0) {

            balle.x = 0 + balle.rayon;
            vitesseX *= - rebond;

        }

        vitesseX *= frottements;

    }());


});