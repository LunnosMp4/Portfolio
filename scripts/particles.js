// Made By Loïc Tisseyre

// if localStorage.setItem("lowPerformance", true); is set, or screen size is under 727px the canvas will not load
if (localStorage.getItem("lowPerformance") !== "true" && window.innerWidth > 991) {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    MOUSE_RADIUS = 120;
    NUMBER_OF_PARTICLES = 10000; // Less is more

    let mouse = {
        x: undefined,
        y: undefined,
        radius: (canvas.height / MOUSE_RADIUS) * (canvas.width / MOUSE_RADIUS)
    }

    class Particle { 
        constructor (x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
        }
        draw () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#fff';
            ctx.fill();
        }
        update () {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) { 
                this.directionY = -this.directionY;
            }
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 5) {
                    this.x += 5;
                }
                if (mouse.x > this.x && this.x > this.size * 5) {
                    this.x -= 5;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 5) {
                    this.y += 5;
                }
                if (mouse.y > this.y && this.y > this.size * 5) {
                    this.y -= 5;
                }
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / NUMBER_OF_PARTICLES;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 5) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - size * 2)) + size * 2;
            let y = (Math.random() * ((innerHeight - size * 2) - size * 2)) + size * 2;
            let directionX = (Math.random() * 5) - 2.5;
            let directionY = (Math.random() * 5) - 2.5;
            let color = '#fff'
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    function connect() {
        let opacityValue = 1;
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = 0; j < particlesArray.length; j++) {
                let distance =
                ((particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x)) +
                ((particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y));
                if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = "rgba(255, 255, 255, " + opacityValue + ")";
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y); 
                    ctx.stroke();  
                }
            }
        }
    }

    function main() {
        init();
        animate();
    }

    function erase() {
        ctx.clearRect(0, 0, innerWidth, innerHeight);   
    }

    //reset all particles when spacebar is pressed
    window.addEventListener('keydown', function(event) {
        if (event.keyCode === 32) {
            erase();
            init();
        }
    });

    window.addEventListener("mousemove", function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    window.addEventListener("mouseout", function () {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    main();
}