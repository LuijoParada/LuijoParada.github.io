var w, h, loopId, id, canvas, ctx, particles;

// parametros de la animacion
var options = {
    particleColor: "rgba(255,255,255)",
    lineColor: "rgba(0,181,255)",
    particleAmount: 12,
    defaultRadius: 0.5,
    variantRadius: 1,
    defaultSpeed: 0.1,
    variantSpeed: 1,
    linkRadius: 100
};
//se utiliza una expresion regular para extraer los digitos de los colores rgb
var rgb = options.lineColor.match(/\d+/g);

//se aplica un evento en el que inicia la animacion una vez que se rederiza el dom
//se puede usar el evento document.addEventListener("DOMContentLoaded",init)  o window.addEventListener("load",init)
window.addEventListener("load", init);

//en esta funcion se obtiene el elemento canvas, con getcontext se busca generar una variable con la informacion de unas coordenadas 2d en donde se encuentra alojado el canvas
/*
ademaas se ejecutan las funciones:
resizeReset,
initialiseElements,
startAnimation
*/ 
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    resizeReset();
    initialiseElements();
    startAnimation();
}
//esta funcion guarda los valores de alto y largo del canvas en las variables w y h y en el objeto canvas
function resizeReset() {
    w = canvas.width = document.getElementById("intro").getAttribute;
    console.log(w);
    h = canvas.height = document.getElementById("intro").innerHeight;
}

//En esta funcion se crea el numero de particulas que dijimos en las opciones mas arriba, se crea una particula y se envia al array particles
function initialiseElements() {
    particles = [];
    for (var i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle());
    }
}
//esta funcion inicializa la variable global looId llamando la funcion requestAnimationFrame la cual solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación pasando la funcion animationLoop
function startAnimation() {
    loopId = requestAnimationFrame(animationLoop);
}


//Borra el contexto del canvas llama la funcion drawScene e inicializa la variable global id con la funcion requestanimationframe pasando la misma funcion creando una llamada recursiva que nunca se detendra
function animationLoop() {
    ctx.clearRect(0,0,w,h);
    drawScene();

    id = requestAnimationFrame(animationLoop);
}

//esta funcion llama a dos funciones que se encargan de pintar la escena
function drawScene() {
    drawLine();
    drawParticle();
}
//por cada una de la particulas en el array se renueva la posicion de la particula y se dibuja de nuevo
function drawParticle() {
    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
}
//esta funcion por lo visto itera sobre todas las particulas y llama un metodo llamado linkpoints que compara un valor del array con todos los demas valores
function drawLine() {
    for (var i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
    }
}
//bueno aqui como die anteriormente se comparan los puntos y si hay pasan el criterio se hace un link
function linkPoints(point, hubs) {
    for (var i = 0; i < hubs.length; i++) {
        var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
        var opacity = 1 - distance / options.linkRadius;
        if (opacity > 0) {
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+opacity+')';
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(hubs[i].x, hubs[i].y);
            ctx.closePath();
            ctx.stroke();
        }
    }
}
//funcion que revisa la funcion 
function checkDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

//el objeto particula...
Particle = function() {
    var _this = this;

    _this.x = Math.random() * w;
    _this.y = Math.random() * h;
    _this.color = options.particleColor;
    _this.radius = options.defaultRadius + Math.random() * options.variantRadius;
    _this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
    _this.directionAngle = Math.floor(Math.random() * 360);
    _this.vector = {
        x: Math.cos(_this.directionAngle) * _this.speed,
        y: Math.sin(_this.directionAngle) * _this.speed
    }

    _this.update = function() {
        _this.border();
        _this.x += _this.vector.x;
        _this.y += _this.vector.y;
    }

    _this.border = function() {
        if (_this.x >= w || _this.x <= 0) {
            _this.vector.x *= -1;
        }
        if (_this.y >= h || _this.y <= 0) {
            _this.vector.y *= -1;
        }
        if (_this.x > w) _this.x = w;
        if (_this.y > h) _this.y = h;
        if (_this.x < 0) _this.x = 0;
        if (_this.y < 0) _this.y = 0;
    }

    _this.draw = function() {
        ctx.beginPath();
        ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = _this.color;
        ctx.fill();
    }
}
