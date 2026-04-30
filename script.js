const greeny = 125;
let angle = 0;

const particlegreen = document.getElementById('pathpoint');
const particlewhite = document.getElementById('diameterpoint');

function centerEl(el) {
    el.style.position = 'absolute';
    el.style.top = '50%';
    el.style.left = '50%';
    el.style.transform = 'translate(-50%, -50%)';
}

[particlegreen, particlewhite].forEach(centerEl);

function animate () {
    angle += 0.02;

    const gx = greeny * Math.cos(angle);
    const gy = -greeny * Math.sin(angle);

    const wx = gx;
    const wy = 0;

    particlegreen.style.transform = `translate(${gx - 6}px, ${gy - 6}px)`;
    particlewhite.style.transform = `translate(${gx - 6}px, -6px)`;
    

    requestAnimationFrame(animate);
}
animate ();
