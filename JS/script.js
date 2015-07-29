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
        form = document.querySelector('form');

    form.addEventListener('keydown', function (e) {

        if (e.keyCode === 13) {

            var champX = parseInt(document.getElementById('vitesseX').value),   
                champY = parseInt(document.getElementById('vitesseY').value),
                taille = parseInt(document.getElementById('taille').value),
                g = parseFloat(document.getElementById('gravity').value);

            if (champX >= -30 && champX <= 30) {
            
                vitesseX = champX;

            }

            if (champY >= -30 && champY <= 30) {

                vitesseY = champY;

            }

            if (g > 0 && g < 1) {

                gravity = g;

            } 

            if (taille > 0 && taille <= 30) {

                balle.rayon = taille;

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